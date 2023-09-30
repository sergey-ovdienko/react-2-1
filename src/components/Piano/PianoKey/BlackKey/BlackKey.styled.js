import styled from 'styled-components';
import {
  BLACK_KEY_NOTES,
  BLACK_KEY_WIDTH,
  WHITE_KEY_WIDTH,
} from '../../Piano.constants';

const getBlackKeyOffset = (note) => {
  const noteIndex = BLACK_KEY_NOTES.indexOf(note);
  if (noteIndex < 0) {
    return 0;
  }
  return noteIndex * WHITE_KEY_WIDTH - BLACK_KEY_WIDTH / 2;
};

export const BlackKey = styled.button`
  position: absolute;
  top: 0;
  height: 60%;
  left: ${({ $note }) => `${getBlackKeyOffset($note)}px`};
  width: ${BLACK_KEY_WIDTH}px;
  appearance: none;
  border: none;
  background: black;

  &:active {
    opacity: 0.8;
  }
`;
