import React, { createContext, useContext, useState } from 'react';

const AppStateContext = createContext();

const initialMode1 = {
  selectedGoals: [],
  title: '',
  characters: '',
  setting: '',
  summary: '',
  story: '',
  connections: {},
};

const initialMode2 = {
  left: {
    characters: '',
    setting: '',
    summary: '',
    story: '',
    selectedGoals: [],
    connections: {},
  },
  right: {
    characters: '',
    setting: '',
    summary: '',
    story: '',
    selectedGoals: [],
    connections: {},
  },
};

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

  return (
    <AppStateContext.Provider
      value={{ mode1, updateMode1, mode2, updateMode2Side }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  return useContext(AppStateContext);
}
