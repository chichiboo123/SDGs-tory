import React from 'react';
import { useTranslation } from 'react-i18next';
import SdgIcon from './SdgIcon';

export default function SdgConnectionList({ selectedGoals, connections, onConnectionChange, placeholderKey }) {
  const { t } = useTranslation();

  if (!selectedGoals || selectedGoals.length === 0) return null;

  return (
    <div className="space-y-3">
      {selectedGoals.map((num) => (
        <div key={num} className="flex gap-3 items-start">
          <SdgIcon num={num} size="sm" className="shrink-0 mt-1" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
              {t(`sdgs.${num}.name`)}
            </p>
            <textarea
              value={connections[num] || ''}
              onChange={(e) => onConnectionChange(num, e.target.value)}
              placeholder={t(placeholderKey)}
              rows={2}
              className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-colors"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
