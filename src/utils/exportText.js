export function buildMode1ExportText(mode1, t) {
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
}

export function buildMode2ExportText(mode2, t) {
  let text = `[${t('mode2.original')}]\n`;
  text += `${t('mode2.characters')}: ${mode2.left.characters}\n`;
  text += `${t('mode2.settingTime')}: ${mode2.left.settingTime}\n`;
  text += `${t('mode2.settingPlace')}: ${mode2.left.settingPlace}\n`;
  text += `${t('mode2.summary')}: ${mode2.left.summary}\n\n`;
  text += `--- ${t('mode2.writeStory')} ---\n${mode2.left.story}\n\n`;
  if (mode2.left.selectedGoals.length > 0) {
    text += `--- ${t('mode2.sdgConnect')} ---\n`;
    mode2.left.selectedGoals.forEach((num) => {
      text += `SDG ${num}. ${t(`sdgs.${num}.name`)}: ${mode2.left.connections[num] || ''}\n`;
    });
  }
  text += `\n========================================\n\n`;
  text += `[${t('mode2.rewrite')}]\n`;
  text += `${t('mode2.characters')}: ${mode2.right.characters}\n`;
  text += `${t('mode2.settingTime')}: ${mode2.right.settingTime}\n`;
  text += `${t('mode2.settingPlace')}: ${mode2.right.settingPlace}\n`;
  text += `${t('mode2.summary')}: ${mode2.right.summary}\n\n`;
  text += `--- ${t('mode2.writeStory')} ---\n${mode2.right.story}\n\n`;
  if (mode2.right.selectedGoals.length > 0) {
    text += `--- ${t('mode2.sdgConnect')} ---\n`;
    mode2.right.selectedGoals.forEach((num) => {
      text += `SDG ${num}. ${t(`sdgs.${num}.name`)}: ${mode2.right.connections[num] || ''}\n`;
    });
  }
  return text;
}
