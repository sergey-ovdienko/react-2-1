import { PianoContainer, StyledPiano } from './Piano.styled';
import { OCTAVE_NOTES } from './Piano.constants';
import { PianoKey } from './PianoKey/PianoKey';

export const Piano = ({ octave }) => {
  return (
    <PianoContainer>
      <StyledPiano>
        {OCTAVE_NOTES.map((note) => (
          <PianoKey key={note} note={note} octave={octave} />
        ))}
      </StyledPiano>
    </PianoContainer>
  );
};
