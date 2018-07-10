import React, { Component, Fragment } from 'react';
import Introduction from './Introduction';
import DonationDialog from '../DonationDialog';

class DonationModes extends Component {
  state = { modalOpen: false, activeContent: null }

  handleModeClick = contents => this.setState({ modalOpen: true, activeContent: contents });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const { modalOpen, activeContent } = this.state;

    return (
      <Fragment>
        <Introduction onModeClick={this.handleModeClick} />
        {activeContent &&
          <DonationDialog content={activeContent} open={modalOpen} onClose={this.handleClose} />
        }
      </Fragment>
    );
  }
}

export default DonationModes;
