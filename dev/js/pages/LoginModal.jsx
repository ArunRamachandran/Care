import React, {Component} from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

export default class LoginModal extends Component {

  state = { openModal: true }

  toggleModal = () => this.setState(state => ({ openModal: !state.openModal }));

  render() {
    const { openModal } = this.state;
    return (
      <div>
        {/*<button onClick={this.toggleModal}>Toggle Modal</button>*/}
        <Modal open={openModal} closeIcon onClose={this.toggleModal}>
          <Header icon='browser' content="I' m a header" />
          <Modal.Content>
            <h3>I'm a content</h3>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
