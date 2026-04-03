import React from 'react';
import { useTranslation } from 'react-i18next';

export default function HelpModal({ open, onClose }) {
  const { t } = useTranslation();

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full mx-4 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {t('help.title')}
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
          >
            <span className="material-icons-outlined text-xl">close</span>
          </button>
        </div>
        <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <p>{t('help.step1')}</p>
          <p>{t('help.step2')}</p>
          <p>{t('help.step3')}</p>
          <p>{t('help.step4')}</p>
          <p>{t('help.step5')}</p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
        >
          {t('common.close')}
        </button>
      </div>
    </div>
  );
}
