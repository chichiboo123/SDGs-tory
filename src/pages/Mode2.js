import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppState } from '../context/AppStateContext';
import SdgSelectorPopup from '../components/SdgSelectorPopup';
import SdgConnectionList from '../components/SdgConnectionList';
import FloatingActionButton from '../components/FloatingActionButton';
import SDG_COLORS from '../data/sdgColors';
import { buildMode2ExportText } from '../utils/exportText';

function StoryPanel({ side, data, updateSide, t }) {
  const [popupOpen, setPopupOpen] = useState(false);

  const label = side === 'left' ? t('mode2.original') : t('mode2.rewrite');
  const prefix = 'mode2';

  const toggleGoal = (num) => {
    const selected = data.selectedGoals.includes(num)
      ? data.selectedGoals.filter((g) => g !== num)
      : [...data.selectedGoals, num].sort((a, b) => a - b);
    updateSide({ selectedGoals: selected });
  };

  const handleConnectionChange = (num, value) => {
    updateSide({ connections: { ...data.connections, [num]: value } });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Section Label */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
          {label}
        </h3>
      </div>

      {/* Input Fields - both sides get these */}
      <div className="mb-4 space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t(`${prefix}.characters`)}
          </label>
          <input
            type="text"
            value={data.characters}
            onChange={(e) => updateSide({ characters: e.target.value })}
            placeholder={t(`${prefix}.charactersPlaceholder`)}
            className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t(`${prefix}.settingTime`)}
            </label>
            <input
              type="text"
              value={data.settingTime}
              onChange={(e) => updateSide({ settingTime: e.target.value })}
              placeholder={t(`${prefix}.settingTimePlaceholder`)}
              className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t(`${prefix}.settingPlace`)}
            </label>
            <input
              type="text"
              value={data.settingPlace}
              onChange={(e) => updateSide({ settingPlace: e.target.value })}
              placeholder={t(`${prefix}.settingPlacePlaceholder`)}
              className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t(`${prefix}.summary`)}
          </label>
          <input
            type="text"
            value={data.summary}
            onChange={(e) => updateSide({ summary: e.target.value })}
            placeholder={t(`${prefix}.summaryPlaceholder`)}
            className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
          />
        </div>
      </div>

      {/* Story textarea */}
      <div className="mb-4 flex-1">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {t(`${prefix}.writeStory`)}
        </label>
        <textarea
          value={data.story}
          onChange={(e) => updateSide({ story: e.target.value })}
          placeholder={t(`${prefix}.writeStoryPlaceholder`)}
          className="w-full h-64 px-3 py-3 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-y transition-colors leading-relaxed"
        />
      </div>

      {/* SDGs Connect */}
      <div>
        <button
          onClick={() => setPopupOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium text-sm transition-colors"
        >
          <span className="material-icons-outlined text-lg">add</span>
          {t(`${prefix}.sdgConnect`)}
          {data.selectedGoals.length > 0 && (
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
              {data.selectedGoals.length}
            </span>
          )}
        </button>

        {/* Selected goals with removable badges */}
        {data.selectedGoals.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5 mb-4">
            {data.selectedGoals.map((num) => (
              <button
                key={num}
                onClick={() => toggleGoal(num)}
                className="inline-flex items-center gap-1 pl-2 pr-1 py-1 rounded-full text-white text-xs font-medium"
                style={{ backgroundColor: SDG_COLORS[num] }}
                title={t('common.close')}
              >
                <span>{num}. {t(`sdgs.${num}.name`)}</span>
                <span className="material-icons-outlined" style={{ fontSize: '14px' }}>close</span>
              </button>
            ))}
          </div>
        )}

        {data.selectedGoals.length > 0 && (
          <div className="mt-3">
            <SdgConnectionList
              selectedGoals={data.selectedGoals}
              connections={data.connections}
              onConnectionChange={handleConnectionChange}
              placeholderKey={`${prefix}.sdgConnectionPlaceholder`}
            />
          </div>
        )}
      </div>

      <SdgSelectorPopup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        selectedGoals={data.selectedGoals}
        onToggle={toggleGoal}
      />
    </div>
  );
}

export default function Mode2() {
  const { t } = useTranslation();
  const { mode2, updateMode2Side } = useAppState();

  const getExportText = () => buildMode2ExportText(mode2, t);

  return (
    <div id="capture-area">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left panel */}
          <div className="flex-1 p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl">
            <StoryPanel
              side="left"
              data={mode2.left}
              updateSide={(updates) => updateMode2Side('left', updates)}
              t={t}
            />
          </div>

          {/* Divider */}
          <div className="hidden lg:flex items-center">
            <div className="w-px h-full bg-gray-200 dark:bg-gray-700" />
          </div>

          {/* Right panel */}
          <div className="flex-1 p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl">
            <StoryPanel
              side="right"
              data={mode2.right}
              updateSide={(updates) => updateMode2Side('right', updates)}
              t={t}
            />
          </div>
        </div>
      </div>

      <FloatingActionButton getExportText={getExportText} />
    </div>
  );
}
