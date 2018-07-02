import React, { Component, Fragment } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Introduction from './Introduction';
import Expansions from '../Expansions';
import TransitionUp from '../Transitions/Up';

class DonationModes extends Component {
  state = { modalOpen: false, activeModal: null }

  handleModeClick = contents => this.setState({ modalOpen: true, activeModal: contents });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const { modalOpen, activeModal } = this.state;

    return (
      <Fragment>
        <Introduction onModeClick={this.handleModeClick} />

        <Dialog
          open={modalOpen}
          onClose={this.handleClose}
          TransitionComponent={TransitionUp}
          aria-labelledby={modalOpen && activeModal.title}
        >
          <DialogContent>
            {!!activeModal && <Expansions content={activeModal} />}
          </DialogContent>

          {modalOpen &&
            <DialogActions>
              <Button
                component="a"
                href={activeModal.callToAction.link}
                target="_blank"
                variant="contained"
                color="secondary"
              >
                {activeModal.callToAction.title}
              </Button>
            </DialogActions>
          }
        </Dialog>
      </Fragment>
    );
  }
}

export default DonationModes;
