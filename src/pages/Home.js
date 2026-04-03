import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-3">
          {t('app.title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {t('app.subtitle')}
        </p>
      </div>

      <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
        {t('home.welcome')}
      </p>

      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
        {/* Mode 1: SDGs -> Story */}
        <button
          onClick={() => navigate('/mode1')}
          className="flex-1 group relative overflow-hidden rounded-2xl border-2 border-indigo-200 dark:border-indigo-800 bg-white dark:bg-gray-800 p-8 text-left hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-xl transition-all"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/50 rounded-bl-[4rem] -mr-2 -mt-2 group-hover:scale-110 transition-transform" />
          <div className="relative">
            <span className="material-icons-outlined text-4xl text-indigo-500 mb-4 block">flag_circle</span>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {t('home.mode1Title')}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {t('home.mode1Desc')}
            </p>
          </div>
        </button>

        {/* Mode 2: Story -> SDGs */}
        <button
          onClick={() => navigate('/mode2')}
          className="flex-1 group relative overflow-hidden rounded-2xl border-2 border-emerald-200 dark:border-emerald-800 bg-white dark:bg-gray-800 p-8 text-left hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-xl transition-all"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 dark:bg-emerald-900/50 rounded-bl-[4rem] -mr-2 -mt-2 group-hover:scale-110 transition-transform" />
          <div className="relative">
            <span className="material-icons-outlined text-4xl text-emerald-500 mb-4 block">auto_stories</span>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {t('home.mode2Title')}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {t('home.mode2Desc')}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
