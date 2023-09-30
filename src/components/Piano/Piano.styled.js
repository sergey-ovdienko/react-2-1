import styled from 'styled-components';
import { WHITE_KEY_NOTES, WHITE_KEY_WIDTH } from './Piano.constants';

export const PianoContainer = styled.div`
  height: 200px;
  background: darkgrey;
  display: flex;
  justify-content: center;
`;

export const StyledPiano = styled.div`
  position: relative;
  height: 100%;
  width: ${WHITE_KEY_WIDTH * WHITE_KEY_NOTES.length}px;
`;

export const Toolbar = styled.div`
  background: darkgray;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 8px;
  background: lightgray;
  margin: 0 8px;

  &:active {
    background: white;
  }
`;
