import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppState } from '../context/AppStateContext';
import SdgSelectorPopup from '../components/SdgSelectorPopup';
import SdgConnectionList from '../components/SdgConnectionList';
import FloatingActionButton from '../components/FloatingActionButton';
import SDG_COLORS from '../data/sdgColors';

function StoryPanel({ side, data, updateSide, t }) {
  const [popupOpen, setPopupOpen] = useState(false);

  const isLeft = side === 'left';
  const label = isLeft ? t('mode2.original') : t('mode2.rewrite');

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

      {/* Input Fields - only show on left, blank space on right */}
      <div className={`mb-4 space-y-3 ${!isLeft ? 'invisible' : ''}`}>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t('mode2.characters')}
          </label>
          <input
            type="text"
            value={isLeft ? data.characters : ''}
            onChange={(e) => isLeft && updateSide({ characters: e.target.value })}
            placeholder={t('mode2.charactersPlaceholder')}
            className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
            tabIndex={isLeft ? 0 : -1}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t('mode2.setting')}
          </label>
          <input
            type="text"
            value={isLeft ? data.setting : ''}
            onChange={(e) => isLeft && updateSide({ setting: e.target.value })}
            placeholder={t('mode2.settingPlaceholder')}
            className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
            tabIndex={isLeft ? 0 : -1}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t('mode2.summary')}
          </label>
          <input
            type="text"
            value={isLeft ? data.summary : ''}
            onChange={(e) => isLeft && updateSide({ summary: e.target.value })}
            placeholder={t('mode2.summaryPlaceholder')}
            className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
            tabIndex={isLeft ? 0 : -1}
          />
        </div>
      </div>

      {/* Story textarea */}
      <div className="mb-4 flex-1">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {t('mode2.writeStory')}
        </label>
        <textarea
          value={data.story}
          onChange={(e) => updateSide({ story: e.target.value })}
          placeholder={t('mode2.writeStoryPlaceholder')}
          className="w-full h-64 px-3 py-3 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-y transition-colors leading-relaxed"
        />
      </div>

      {/* SDGs Connect */}
      <div>
        <button
          onClick={() => setPopupOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium text-sm transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          {t('mode2.sdgConnect')}
          {data.selectedGoals.length > 0 && (
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
              {data.selectedGoals.length}
            </span>
          )}
        </button>

        {/* Selected goals with mini badges */}
        {data.selectedGoals.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5 mb-4">
            {data.selectedGoals.map((num) => (
              <span
                key={num}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-white text-xs font-medium"
                style={{ backgroundColor: SDG_COLORS[num] }}
              >
                {num}. {t(`sdgs.${num}.name`)}
              </span>
            ))}
          </div>
        )}

        {data.selectedGoals.length > 0 && (
          <div className="mt-3">
            <SdgConnectionList
              selectedGoals={data.selectedGoals}
              connections={data.connections}
              onConnectionChange={handleConnectionChange}
              placeholderKey="mode2.sdgConnectionPlaceholder"
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

  const getExportText = () => {
    let text = `[${t('mode2.original')}]\n`;
    text += `${t('mode2.characters')}: ${mode2.left.characters}\n`;
    text += `${t('mode2.setting')}: ${mode2.left.setting}\n`;
    text += `${t('mode2.summary')}: ${mode2.left.summary}\n\n`;
    text += `--- ${t('mode2.writeStory')} ---\n${mode2.left.story}\n\n`;
    if (mode2.left.selectedGoals.length > 0) {
      text += `--- ${t('mode2.sdgConnect')} ---\n`;
      mode2.left.selectedGoals.forEach((num) => {
        text += `SDG ${num}. ${t(`sdgs.${num}.name`)}: ${mode2.left.connections[num] || ''}\n`;
      });
    }
    text += `\n========================================\n\n`;
    text += `[${t('mode2.rewrite')}]\n\n`;
    text += `--- ${t('mode2.writeStory')} ---\n${mode2.right.story}\n\n`;
    if (mode2.right.selectedGoals.length > 0) {
      text += `--- ${t('mode2.sdgConnect')} ---\n`;
      mode2.right.selectedGoals.forEach((num) => {
        text += `SDG ${num}. ${t(`sdgs.${num}.name`)}: ${mode2.right.connections[num] || ''}\n`;
      });
    }
    return text;
  };

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
