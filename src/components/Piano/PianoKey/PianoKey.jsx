import React from 'react';
import { WhiteKey } from './WhiteKey/WhiteKey.styled';
import { BlackKey } from './BlackKey/BlackKey.styled';

export class PianoKey extends React.Component {
  handlePress = () => {
    const { onPress, note } = this.props;
    onPress(note);
  };

  renderBlackKey() {
    const { note } = this.props;
    return <BlackKey $note={note} onClick={this.handlePress} />;
  }

  renderWhiteKey() {
    const { note } = this.props;
    return <WhiteKey $note={note} onClick={this.handlePress} />;
  }

  render() {
    const { note } = this.props;

    if (note.length === 2) {
      return this.renderBlackKey();
    }
    return this.renderWhiteKey();
  }
}
