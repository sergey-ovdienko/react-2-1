import { Synth } from 'tone';

const synth = new Synth().toDestination();

export const playNote = (note, octave) => {
  synth.triggerAttackRelease(`${note}${octave}`, '16n');
};
