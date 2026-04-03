import React from 'react';
import { useTranslation } from 'react-i18next';
import SDG_COLORS from '../data/sdgColors';

const SDG_ICON_BASE = 'https://raw.githubusercontent.com/UNStats-SDGs/sdgs-data/master/images/en/TGG_Icon_Color_';

export default function SdgSelectorPopup({ open, onClose, selectedGoals, onToggle }) {
  const { t } = useTranslation();

  if (!open) return null;

  const goals = Array.from({ length: 17 }, (_, i) => i + 1);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-2xl w-full mx-4 p-6 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {t('mode1.selectGoals')}
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500"
          >
            <span className="material-icons-outlined text-xl">close</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {goals.map((num) => {
            const selected = selectedGoals.includes(num);
            const padded = String(num).padStart(2, '0');
            return (
              <button
                key={num}
                onClick={() => onToggle(num)}
                className={`relative p-3 rounded-xl border-2 text-left transition-all ${
                  selected
                    ? 'border-current shadow-md scale-[1.02]'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
                style={selected ? { borderColor: SDG_COLORS[num], backgroundColor: SDG_COLORS[num] + '15' } : {}}
              >
                <img
                  src={`https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${padded}.jpg`}
                  alt={`SDG ${num}`}
                  className="w-12 h-12 rounded-lg mb-2 object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <p className="text-xs font-medium text-gray-800 dark:text-gray-200 leading-tight">
                  {t(`sdgs.${num}.name`)}
                </p>
                {selected && (
                  <div
                    className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: SDG_COLORS[num] }}
                  >
                    <span className="material-icons-outlined text-sm" style={{ fontSize: '14px' }}>check</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {selectedGoals.length} {t('common.selected')}
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            {t('common.close')}
          </button>
        </div>
      </div>
    </div>
  );
}
