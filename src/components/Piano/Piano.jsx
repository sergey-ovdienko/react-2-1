import { Component } from 'react';
import { PianoContainer, StyledPiano, Toolbar, Button } from './Piano.styled';
import { OCTAVE_NOTES } from './Piano.constants';
import { PianoKey } from './PianoKey/PianoKey';
import { playNote } from '../../utils/piano';

export class Piano extends Component {
  static defaultProps = {
    initialOctave: 3,
  };

  state = {
    octave: this.props.initialOctave,
    melody: [],
  };

  handlePress = (note) => {
    playNote(note, this.state.octave);
    this.setState((prevState) => {
      return {
        melody: [...prevState.melody, note],
      };
    });
  };

  playMelody = () => {
    const { melody, octave } = this.state;
    for (let i = 0; i < melody.length; i++) {
      setTimeout(() => {
        playNote(melody[i], octave);
      }, i * 250);
    }
  };

  clearMelody = () => {
    this.setState({
      melody: [],
    });
  };

  increaseOctave = () => {
    this.setState((prevState) => {
      return {
        octave: prevState.octave + 1,
      };
    });
  };

  decreaseOctave = () => {
    this.setState({
      octave: this.state.octave - 1,
    });
  };

  render() {
    const { octave, melody } = this.state;

    return (
      <>
        <Toolbar>
          <span>Current octave: {octave}</span>
          <Button onClick={this.decreaseOctave}>Decrease octave</Button>
          <Button onClick={this.increaseOctave}>Increase octave</Button>
          <Button onClick={this.playMelody}>Play melody</Button>
          <Button onClick={this.clearMelody}>Clear melody</Button>
        </Toolbar>
        <PianoContainer>
          <StyledPiano>
            {OCTAVE_NOTES.map((note) => (
              <PianoKey key={note} note={note} onPress={this.handlePress} />
            ))}
          </StyledPiano>
        </PianoContainer>
      </>
    );
  }
}
