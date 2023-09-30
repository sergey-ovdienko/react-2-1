import styled from 'styled-components';
import { WHITE_KEY_NOTES, WHITE_KEY_WIDTH } from '../../Piano.constants';

const getWhiteKeyOffset = (note) => {
  const noteIndex = WHITE_KEY_NOTES.indexOf(note);
  if (noteIndex < 0) {
    return 0;
  }
  return noteIndex * WHITE_KEY_WIDTH;
};

export const WhiteKey = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ $note }) => `${getWhiteKeyOffset($note)}px`};
  width: ${WHITE_KEY_WIDTH}px;
  appearance: none;
  border: none;
  background: white;
  border-top: 1px solid darkgrey;
  border-left: 1px solid darkgrey;
  border-bottom: 1px solid darkgrey;

  &:active {
    opacity: 0.8;
  }
`;
