export const COLORS = {
  indigo: '#1A3A5C',
  sky: '#2E5C8A',
  amber: '#EF9F27',
  amberText: '#412402',
  mist: '#F1EFE8',
  mistDark: '#E8E6DE',
  slate: '#2C2C2A',
  slateMuted: '#5F5E5A',
  slateHint: '#888780',
  blueLight: '#E6F1FB',
  blueText: '#0C447C',
  greenLight: '#EAF3DE',
  greenText: '#3B6D11',
  amberLight: '#FAEEDA',
  amberTextDark: '#633806',
  redLight: '#FCEBEB',
  redText: '#791F1F',
  purpleLight: '#EEEDFE',
  purpleText: '#3C3489',
  pinkLight: '#FBEAF0',
  pinkText: '#72243E',
  border: 'rgba(0,0,0,0.08)',
  borderStrong: 'rgba(0,0,0,0.12)',
};

export const diffStyle = (tint) => {
  const map = {
    green: { bg: COLORS.greenLight, fg: COLORS.greenText },
    amber: { bg: COLORS.amberLight, fg: COLORS.amberTextDark },
    red: { bg: COLORS.redLight, fg: COLORS.redText },
    blue: { bg: COLORS.blueLight, fg: COLORS.blueText },
    purple: { bg: COLORS.purpleLight, fg: COLORS.purpleText },
    pink: { bg: COLORS.pinkLight, fg: COLORS.pinkText },
  };
  return map[tint] || map.blue;
};

export const difficultyStyle = (difficulty) => {
  if (difficulty === 'Beginner') return diffStyle('green');
  if (difficulty === 'Intermediate') return diffStyle('amber');
  if (difficulty === 'Advanced') return diffStyle('red');
  return diffStyle('blue');
};
