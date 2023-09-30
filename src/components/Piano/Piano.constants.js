export const WHITE_KEY_WIDTH = 64;
export const BLACK_KEY_WIDTH = 32;

export const BLACK_KEY_NOTES = ['', 'Db', 'Eb', '', 'Gb', 'Ab', 'Bb', ''];
export const WHITE_KEY_NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

export const OCTAVE_NOTES = WHITE_KEY_NOTES.reduce(
  (result, whiteKeyNote, index) => {
    result.push(whiteKeyNote);
    const blackKeyNote = BLACK_KEY_NOTES[index];
    if (blackKeyNote) {
      result.push(blackKeyNote);
    }
    return result;
  },
  [],
);
