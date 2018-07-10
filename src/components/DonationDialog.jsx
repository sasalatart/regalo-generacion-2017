import React from 'react';
import PropTypes from 'prop-types';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Expansions from './Expansions';
import TransitionUp from './Transitions/Up';

function DonationDialog({
  content,
  open,
  fullScreen,
  onClose,
}) {
  return (
    <Dialog
      open={open}
      fullScreen={fullScreen}
      onClose={onClose}
      TransitionComponent={TransitionUp}
      aria-labelledby={content.title}
    >
      <DialogContent>
        <Expansions content={content} />
      </DialogContent>

      <DialogActions>
        {fullScreen &&
          <Button onClick={onClose}>
            Cancelar
          </Button>
        }
        <Button
          component="a"
          href={content.callToAction.link}
          target="_blank"
          variant="contained"
          color="secondary"
        >
          {content.callToAction.title}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DonationDialog.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    callToAction: PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  open: PropTypes.bool.isRequired,
  fullScreen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withMobileDialog()(DonationDialog);
