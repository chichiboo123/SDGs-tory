import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppState } from '../context/AppStateContext';
import SDG_COLORS from '../data/sdgColors';
import SdgConnectionList from '../components/SdgConnectionList';
import FloatingActionButton from '../components/FloatingActionButton';

export default function Mode1() {
  const { t } = useTranslation();
  const { mode1, updateMode1 } = useAppState();

  const goals = Array.from({ length: 17 }, (_, i) => i + 1);

  const toggleGoal = (num) => {
    const selected = mode1.selectedGoals.includes(num)
      ? mode1.selectedGoals.filter((g) => g !== num)
      : [...mode1.selectedGoals, num].sort((a, b) => a - b);
    updateMode1({ selectedGoals: selected });
  };

  const handleConnectionChange = (num, value) => {
    updateMode1({ connections: { ...mode1.connections, [num]: value } });
  };

  const getExportText = () => {
    let text = `[${t('mode1.title')}]\n\n`;
    text += `${t('mode1.storyTitle')}: ${mode1.title}\n`;
    text += `${t('mode1.characters')}: ${mode1.characters}\n`;
    text += `${t('mode1.settingTime')}: ${mode1.settingTime}\n`;
    text += `${t('mode1.settingPlace')}: ${mode1.settingPlace}\n`;
    text += `${t('mode1.summary')}: ${mode1.summary}\n\n`;
    text += `--- ${t('mode1.writeStory')} ---\n${mode1.story}\n\n`;
    if (mode1.selectedGoals.length > 0) {
      text += `--- ${t('mode1.sdgConnection')} ---\n`;
      mode1.selectedGoals.forEach((num) => {
        text += `\nSDG ${num}. ${t(`sdgs.${num}.name`)}\n`;
        text += `${mode1.connections[num] || ''}\n`;
      });
    }
    return text;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6" id="capture-area">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        {t('mode1.title')}
      </h2>

      {/* SDGs Goal Selection */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
          {t('mode1.selectGoals')}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {t('mode1.selectGoalsDesc')}
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {goals.map((num) => {
            const selected = mode1.selectedGoals.includes(num);
            const padded = String(num).padStart(2, '0');
            return (
              <button
                key={num}
                onClick={() => toggleGoal(num)}
                className={`relative p-2 rounded-xl border-2 text-center transition-all ${
                  selected
                    ? 'shadow-md scale-[1.03]'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
                style={
                  selected
                    ? { borderColor: SDG_COLORS[num], backgroundColor: SDG_COLORS[num] + '18' }
                    : {}
                }
              >
                <img
                  src={`https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${padded}.jpg`}
                  alt={`SDG ${num}`}
                  className="w-10 h-10 mx-auto rounded-lg mb-1 object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  className="w-10 h-10 mx-auto rounded-lg items-center justify-center text-white font-bold text-sm mb-1 hidden"
                  style={{ backgroundColor: SDG_COLORS[num] }}
                >
                  {num}
                </div>
                <p className="text-[10px] sm:text-xs font-medium text-gray-700 dark:text-gray-300 leading-tight truncate">
                  {t(`sdgs.${num}.name`)}
                </p>
                {selected && (
                  <div
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: SDG_COLORS[num] }}
                  >
                    <span className="material-icons-outlined" style={{ fontSize: '14px' }}>check</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Story Planning */}
      <section className="mb-8 p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          {t('mode1.storyPlanning')}
        </h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('mode1.storyTitle')}
            </label>
            <input
              type="text"
              value={mode1.title}
              onChange={(e) => updateMode1({ title: e.target.value })}
              placeholder={t('mode1.storyTitlePlaceholder')}
              className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('mode1.characters')}
            </label>
            <input
              type="text"
              value={mode1.characters}
              onChange={(e) => updateMode1({ characters: e.target.value })}
              placeholder={t('mode1.charactersPlaceholder')}
              className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('mode1.settingTime')}
              </label>
              <input
                type="text"
                value={mode1.settingTime}
                onChange={(e) => updateMode1({ settingTime: e.target.value })}
                placeholder={t('mode1.settingTimePlaceholder')}
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t('mode1.settingPlace')}
              </label>
              <input
                type="text"
                value={mode1.settingPlace}
                onChange={(e) => updateMode1({ settingPlace: e.target.value })}
                placeholder={t('mode1.settingPlacePlaceholder')}
                className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('mode1.summary')}
            </label>
            <input
              type="text"
              value={mode1.summary}
              onChange={(e) => updateMode1({ summary: e.target.value })}
              placeholder={t('mode1.summaryPlaceholder')}
              className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Story Writing */}
      <section className="mb-8 p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
          {t('mode1.writeStory')}
        </h3>
        <textarea
          value={mode1.story}
          onChange={(e) => updateMode1({ story: e.target.value })}
          placeholder={t('mode1.writeStoryPlaceholder')}
          rows={12}
          className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-y transition-colors leading-relaxed"
        />
      </section>

      {/* SDGs Connection */}
      {mode1.selectedGoals.length > 0 && (
        <section className="mb-8 p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            {t('mode1.sdgConnection')}
          </h3>
          <SdgConnectionList
            selectedGoals={mode1.selectedGoals}
            connections={mode1.connections}
            onConnectionChange={handleConnectionChange}
            placeholderKey="mode1.sdgConnectionPlaceholder"
          />
        </section>
      )}

      <FloatingActionButton getExportText={getExportText} />
    </div>
  );
}
