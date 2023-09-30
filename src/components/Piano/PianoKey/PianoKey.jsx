import React from 'react';
import { WhiteKey } from './WhiteKey/WhiteKey.styled';
import { BlackKey } from './BlackKey/BlackKey.styled';

export const PianoKey = ({ note, octave }) => {
  if (note.length === 2) {
    return <BlackKey $note={note} />;
  }
  return <WhiteKey $note={note} />;
};
