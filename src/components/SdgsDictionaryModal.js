import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SDG_COLORS from '../data/sdgColors';
import SDG_DICTIONARY from '../data/sdgsDictionary';

const GOAL_NUMBERS = Array.from({ length: 17 }, (_, i) => i + 1);

export default function SdgsDictionaryModal({ open, onClose }) {
  const { t, i18n } = useTranslation();
  const [selectedGoal, setSelectedGoal] = useState(null);
  const detailRef = useRef(null);
  const lang = ['ko', 'en', 'ja'].includes(i18n.language) ? i18n.language : 'ko';

  useEffect(() => {
    if (!open) {
      setSelectedGoal(null);
    }
  }, [open]);

  useEffect(() => {
    if (selectedGoal !== null && detailRef.current) {
      detailRef.current.scrollTop = 0;
    }
  }, [selectedGoal]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const overview = SDG_DICTIONARY.overview[lang];
  const goalData = selectedGoal ? SDG_DICTIONARY.goals[selectedGoal]?.[lang] : null;
  const goalColor = selectedGoal ? SDG_COLORS[selectedGoal] : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-icons-outlined text-xl text-indigo-600 dark:text-indigo-400">menu_book</span>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              {t('dictionary.title')}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
            aria-label={t('common.close')}
          >
            <span className="material-icons-outlined text-xl">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-1 min-h-0">
          {/* Sidebar: goal list */}
          <aside className="w-20 sm:w-28 flex-shrink-0 border-r border-gray-200 dark:border-gray-700 overflow-y-auto bg-gray-50 dark:bg-gray-800/50">
            {/* Overview button */}
            <button
              onClick={() => setSelectedGoal(null)}
              className={`w-full py-3 px-1 flex flex-col items-center gap-1 text-xs font-medium transition-colors border-b border-gray-200 dark:border-gray-700 ${
                selectedGoal === null
                  ? 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <span className="material-icons-outlined text-xl">info</span>
              <span className="leading-tight text-center">{t('dictionary.overviewTab')}</span>
            </button>

            {/* Goal buttons */}
            {GOAL_NUMBERS.map((num) => {
              const color = SDG_COLORS[num];
              const isSelected = selectedGoal === num;
              return (
                <button
                  key={num}
                  onClick={() => setSelectedGoal(num)}
                  className={`w-full py-2.5 px-1 flex flex-col items-center gap-1 text-xs transition-colors ${
                    isSelected
                      ? 'bg-gray-100 dark:bg-gray-700'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: color }}
                  >
                    {num}
                  </span>
                  <span
                    className="leading-tight text-center hidden sm:block"
                    style={{ color: isSelected ? color : undefined }}
                  >
                    {t(`sdgs.${num}.name`)}
                  </span>
                </button>
              );
            })}
          </aside>

          {/* Main content */}
          <main ref={detailRef} className="flex-1 overflow-y-auto">
            {selectedGoal === null ? (
              /* Overview panel */
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {overview.title}
                </h3>
                <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line mb-6">
                  {overview.description}
                </div>

                {/* Goal grid preview */}
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  {t('dictionary.goalsListTitle')}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                  {GOAL_NUMBERS.map((num) => (
                    <button
                      key={num}
                      onClick={() => setSelectedGoal(num)}
                      className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all text-left"
                    >
                      <span
                        className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                        style={{ backgroundColor: SDG_COLORS[num] }}
                      >
                        {num}
                      </span>
                      <span className="text-xs text-gray-700 dark:text-gray-300 leading-tight">
                        {t(`sdgs.${num}.name`)}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Source */}
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    <span className="material-icons-outlined text-xs align-middle mr-1">verified</span>
                    {overview.source}
                  </p>
                </div>
              </div>
            ) : (
              /* Goal detail panel */
              <div className="p-5 sm:p-6">
                {/* Goal header */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0"
                    style={{ backgroundColor: goalColor }}
                  >
                    {selectedGoal}
                  </span>
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      {t('dictionary.goalLabel')} {selectedGoal}
                    </p>
                    <h3
                      className="text-lg font-bold"
                      style={{ color: goalColor }}
                    >
                      {t(`sdgs.${selectedGoal}.name`)}
                    </h3>
                  </div>
                </div>

                {/* Short description from i18n */}
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 pl-1 border-l-4 pl-3" style={{ borderColor: goalColor }}>
                  {t(`sdgs.${selectedGoal}.desc`)}
                </p>

                {/* Overview */}
                {goalData && (
                  <>
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {t('dictionary.overviewLabel')}
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {goalData.overview}
                      </p>
                    </div>

                    {/* Targets */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        {t('dictionary.targetsLabel')}
                      </h4>
                      <ul className="space-y-2">
                        {goalData.targets.map((target) => (
                          <li key={target.id} className="flex gap-3">
                            <span
                              className="flex-shrink-0 text-xs font-bold px-1.5 py-0.5 rounded text-white h-fit mt-0.5"
                              style={{ backgroundColor: goalColor }}
                            >
                              {target.id}
                            </span>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                              {target.text}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setSelectedGoal(selectedGoal > 1 ? selectedGoal - 1 : null)}
                    className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    <span className="material-icons-outlined text-sm">chevron_left</span>
                    {selectedGoal > 1 ? `${t('dictionary.goalLabel')} ${selectedGoal - 1}` : t('dictionary.overviewTab')}
                  </button>
                  {selectedGoal < 17 && (
                    <button
                      onClick={() => setSelectedGoal(selectedGoal + 1)}
                      className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {`${t('dictionary.goalLabel')} ${selectedGoal + 1}`}
                      <span className="material-icons-outlined text-sm">chevron_right</span>
                    </button>
                  )}
                </div>

                {/* Source */}
                <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    <span className="material-icons-outlined text-xs align-middle mr-1">verified</span>
                    {overview.source}
                  </p>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
