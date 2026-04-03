import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppState } from '../context/AppStateContext';
import { decodeShareState } from '../utils/shareState';

const ALLOWED_PATHS = ['/', '/mode1', '/mode2'];

function normalizePath(rawPath) {
  if (typeof rawPath !== 'string' || !rawPath.trim()) return null;

  let path = rawPath.trim();

  try {
    if (path.startsWith('http://') || path.startsWith('https://')) {
      path = new URL(path).pathname;
    }
  } catch {
    return null;
  }

  const base = process.env.PUBLIC_URL || '';
  if (base && path.startsWith(base)) {
    path = path.slice(base.length) || '/';
  }

  if (!path.startsWith('/')) {
    path = `/${path}`;
  }

  path = path.split('?')[0].split('#')[0];

  return ALLOWED_PATHS.includes(path) ? path : null;
}

export default function SharedStateLoader() {
  const { importState } = useAppState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const encoded = params.get('state');

    if (!encoded) return;

    const payload = decodeShareState(encoded);

    params.delete('state');
    const nextSearch = params.toString();

    if (!payload) {
      navigate(
        {
          pathname: location.pathname,
          search: nextSearch ? `?${nextSearch}` : '',
        },
        { replace: true },
      );
      return;
    }

    importState(payload);

    const targetPath = normalizePath(payload.path) || location.pathname;

    navigate(
      {
        pathname: targetPath,
        search: nextSearch ? `?${nextSearch}` : '',
      },
      { replace: true },
    );
  }, [importState, location.pathname, location.search, navigate]);

  return null;
}
