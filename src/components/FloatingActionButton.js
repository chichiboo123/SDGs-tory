import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import html2canvas from 'html2canvas';

export default function FloatingActionButton({ getExportText }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState('');
  const timerRef = useRef(null);

  const showToast = (msg) => {
    setToast(msg);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setToast(''), 2000);
  };

  const handleTxt = () => {
    const text = getExportText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SDGs-tory.txt';
    a.click();
    URL.revokeObjectURL(url);
    setOpen(false);
  };

  const handleClipboard = async () => {
    const text = getExportText();
    try {
      await navigator.clipboard.writeText(text);
      showToast(t('common.copied'));
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast(t('common.copied'));
    }
    setOpen(false);
  };

  const handleJpg = async () => {
    const el = document.getElementById('capture-area');
    if (!el) return;
    try {
      const canvas = await html2canvas(el, {
        backgroundColor: document.documentElement.classList.contains('dark') ? '#111827' : '#ffffff',
        scale: 2,
      });
      const link = document.createElement('a');
      link.download = 'SDGs-tory.jpg';
      link.href = canvas.toDataURL('image/jpeg', 0.95);
      link.click();
    } catch (err) {
      console.error('Screenshot failed:', err);
    }
    setOpen(false);
  };

  const handleShare = async () => {
    const text = getExportText();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'SDGs-tory',
          text: text.substring(0, 300),
          url: window.location.href,
        });
      } catch {
        /* user cancelled */
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast(t('common.copied'));
      } catch {
        /* fallback */
      }
    }
    setOpen(false);
  };

  const actions = [
    { label: t('common.exportTxt'), icon: 'TXT', onClick: handleTxt },
    { label: t('common.exportClipboard'), icon: '📋', onClick: handleClipboard },
    { label: t('common.exportJpg'), icon: 'JPG', onClick: handleJpg },
    { label: t('common.exportShare'), icon: '🔗', onClick: handleShare },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {toast && (
        <div className="mb-2 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg text-sm font-medium shadow-lg animate-fade-in">
          {toast}
        </div>
      )}

      {open && (
        <div className="flex flex-col gap-2 mb-2">
          {actions.map((action, i) => (
            <button
              key={i}
              onClick={action.onClick}
              className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg hover:shadow-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all whitespace-nowrap"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="w-8 text-center font-bold text-xs">{action.icon}</span>
              {action.label}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-all hover:scale-105 ${
          open
            ? 'bg-gray-500 hover:bg-gray-600 rotate-45'
            : 'bg-indigo-600 hover:bg-indigo-700'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          {open ? (
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          ) : (
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          )}
        </svg>
      </button>
    </div>
  );
}
