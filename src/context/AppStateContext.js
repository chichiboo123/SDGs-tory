import React, { createContext, useContext, useState } from 'react';

const AppStateContext = createContext();

const initialMode1 = {
  selectedGoals: [],
  title: '',
  characters: '',
  settingTime: '',
  settingPlace: '',
  summary: '',
  story: '',
  connections: {},
};

const initialMode2Side = {
  characters: '',
  settingTime: '',
  settingPlace: '',
  summary: '',
  story: '',
  selectedGoals: [],
  connections: {},
};

const initialMode2 = {
  left: { ...initialMode2Side },
  right: { ...initialMode2Side },
};

const normalizeGoals = (goals) => {
  if (!Array.isArray(goals)) return [];
  return [...new Set(goals.map((n) => Number(n)).filter((n) => n >= 1 && n <= 17))].sort((a, b) => a - b);
};

const normalizeConnections = (connections) => {
  if (!connections || typeof connections !== 'object') return {};
  return Object.entries(connections).reduce((acc, [k, v]) => {
    const key = Number(k);
    if (key >= 1 && key <= 17) {
      acc[key] = typeof v === 'string' ? v : String(v ?? '');
    }
    return acc;
  }, {});
};

const normalizeMode1 = (mode1) => ({
  ...initialMode1,
  ...(mode1 || {}),
  selectedGoals: normalizeGoals(mode1?.selectedGoals),
  connections: normalizeConnections(mode1?.connections),
});

const normalizeMode2Side = (side) => ({
  ...initialMode2Side,
  ...(side || {}),
  selectedGoals: normalizeGoals(side?.selectedGoals),
  connections: normalizeConnections(side?.connections),
});

const normalizeMode2 = (mode2) => ({
  left: normalizeMode2Side(mode2?.left),
  right: normalizeMode2Side(mode2?.right),
});

export function AppStateProvider({ children }) {
  const [mode1, setMode1] = useState(initialMode1);
  const [mode2, setMode2] = useState(initialMode2);

  const updateMode1 = (updates) =>
    setMode1((prev) => ({ ...prev, ...updates }));

  const updateMode2Side = (side, updates) =>
    setMode2((prev) => ({
      ...prev,
      [side]: { ...prev[side], ...updates },
    }));

  const importState = (payload) => {
    if (!payload || typeof payload !== 'object') return;
    if (payload.mode1) {
      setMode1(normalizeMode1(payload.mode1));
    }
    if (payload.mode2) {
      setMode2(normalizeMode2(payload.mode2));
    }
  };

  const exportState = () => ({
    mode1,
    mode2,
  });

  return (
    <AppStateContext.Provider
      value={{ mode1, updateMode1, mode2, updateMode2Side, importState, exportState }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  return useContext(AppStateContext);
}
