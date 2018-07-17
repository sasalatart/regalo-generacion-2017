import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DonationDialog from './DonationDialog';
import { mentoringIntroduction, mentoringContents } from '../lib/mentoring';

const styles = theme => ({
  body: theme.baseFont,
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class Mentoring extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      body: PropTypes.string.isRequired,
      buttonWrapper: PropTypes.string.isRequired,
      button: PropTypes.string.isRequired,
    }).isRequired,
  }

  state = { modalOpen: false };

  handleOpenMoreInfo = () => this.setState({ modalOpen: true });

  handleCloseMoreInfo = () => this.setState({ modalOpen: false });

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Typography variant="display1" align="center" gutterBottom>
          {mentoringIntroduction.title}
        </Typography>

        {mentoringIntroduction.description.map((paragraph, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Typography key={index} variant="subheading" align="justify" className={classes.body} gutterBottom>
            {paragraph}
          </Typography>
        ))}

        <div className={classes.buttonWrapper}>
          <Button variant="contained" color="primary" onClick={this.handleOpenMoreInfo} className={classes.button}>
            {mentoringIntroduction.moreInfo}
          </Button>
        </div>

        <DonationDialog
          content={mentoringContents}
          open={this.state.modalOpen}
          onClose={this.handleCloseMoreInfo}
        />
      </Fragment>
    );
  }
}

export default withStyles(styles)(Mentoring);
