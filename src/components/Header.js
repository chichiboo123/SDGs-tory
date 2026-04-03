import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useAppState } from '../context/AppStateContext';
import HelpModal from './HelpModal';

const LANGUAGES = [
  { code: 'ko', label: 'KOR' },
  { code: 'en', label: 'ENG' },
  { code: 'ja', label: 'JPN' },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const { dark, toggle } = useTheme();
  const { exportState, importState } = useAppState();
  const navigate = useNavigate();
  const location = useLocation();
  const [langOpen, setLangOpen] = useState(false);
  const [saveOpen, setSaveOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const langRef = useRef(null);
  const saveRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
      if (saveRef.current && !saveRef.current.contains(e.target)) {
        setSaveOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  const handleBackupJson = () => {
    const data = {
      v: 1,
      savedAt: new Date().toISOString(),
      ...exportState(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SDGs-tory-backup.json';
    a.click();
    URL.revokeObjectURL(url);
    setSaveOpen(false);
  };

  const handleOpenJson = () => {
    fileInputRef.current?.click();
    setSaveOpen(false);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const content = await file.text();
      const parsed = JSON.parse(content);
      importState(parsed);
    } catch {
      alert(t('common.invalidJson'));
    } finally {
      e.target.value = '';
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {location.pathname !== '/' && (
              <button
                onClick={() => navigate('/')}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
                title={t('common.back')}
              >
                <span className="material-icons-outlined text-xl">arrow_back</span>
              </button>
            )}
            <div>
              <h1
                className="text-xl font-bold text-indigo-600 dark:text-indigo-400 cursor-pointer"
                onClick={() => navigate('/')}
              >
                {t('app.title')}
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
                {t('app.subtitle')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
              title={t('common.theme')}
            >
              <span className="material-icons-outlined text-xl">
                {dark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            {/* Save menu */}
            <div className="relative" ref={saveRef}>
              <button
                onClick={() => setSaveOpen(!saveOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
                title={t('common.save')}
              >
                <span className="material-icons-outlined text-xl">save</span>
              </button>
              {saveOpen && (
                <div className="absolute right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden min-w-[140px]">
                  <button
                    onClick={handleOpenJson}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                  >
                    {t('common.jsonOpen')}
                  </button>
                  <button
                    onClick={handleBackupJson}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                  >
                    {t('common.jsonBackup')}
                  </button>
                </div>
              )}
            </div>

            {/* Language dropdown */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors flex items-center gap-1 text-sm font-medium"
                title={t('common.language')}
              >
                <span className="material-icons-outlined text-xl">language</span>
                <span className="hidden sm:inline">{currentLang.label}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden min-w-[100px]">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        i18n.changeLanguage(lang.code);
                        setLangOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                        i18n.language === lang.code
                          ? 'text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-indigo-900/30'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Help button */}
            <button
              onClick={() => setHelpOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
              title={t('common.help')}
            >
              <span className="material-icons-outlined text-xl">help_outline</span>
            </button>
          </div>
        </div>
      </header>

      <input
        ref={fileInputRef}
        type="file"
        accept="application/json,.json"
        className="hidden"
        onChange={handleFileChange}
      />

      <HelpModal open={helpOpen} onClose={() => setHelpOpen(false)} />
    </>
  );
}
