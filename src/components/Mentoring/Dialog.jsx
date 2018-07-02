import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Expansions from '../Expansions';
import TransitionUp from '../Transitions/Up';
import { mentoringContents } from '../../lib/mentoring';

function MentoringDialog({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={TransitionUp}
      aria-labelledby="Más información sobre mentoring"
    >
      <DialogContent>
        <Expansions content={mentoringContents} />
      </DialogContent>

      <DialogActions>
        <Button
          component="a"
          href={mentoringContents.callToAction.link}
          target="_blank"
          variant="contained"
          color="secondary"
        >
          {mentoringContents.callToAction.title}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

MentoringDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MentoringDialog;
