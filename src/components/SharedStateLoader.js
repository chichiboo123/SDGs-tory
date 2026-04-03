import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppState } from '../context/AppStateContext';
import { decodeShareState } from '../utils/shareState';

export default function SharedStateLoader() {
  const { importState } = useAppState();
  const location = useLocation();
  const navigate = useNavigate();
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;

    const params = new URLSearchParams(location.search);
    const encoded = params.get('state');
    if (!encoded) {
      loadedRef.current = true;
      return;
    }

    const payload = decodeShareState(encoded);
    if (!payload) {
      loadedRef.current = true;
      return;
    }

    importState(payload);

    if (payload.path && payload.path !== location.pathname) {
      navigate(payload.path, { replace: true });
    }

    loadedRef.current = true;
  }, [importState, location.pathname, location.search, navigate]);

  return null;
}
