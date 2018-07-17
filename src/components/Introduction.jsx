import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import introductionContents from '../lib/introduction';

const styles = theme => ({
  subheading: theme.baseFont,
});

function Introduction({ classes }) {
  return (
    <Fragment>
      <Typography variant="display1" align="center" gutterBottom>
        {introductionContents.title}
      </Typography>

      <Typography variant="headline" align="center" gutterBottom>
        {introductionContents.subtitle}
      </Typography>

      {introductionContents.description.map((paragraph, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Typography key={index} variant="subheading" align="justify" className={classes.subheading} gutterBottom>
          {paragraph}
        </Typography>
      ))}
    </Fragment>
  );
}

Introduction.propTypes = {
  classes: PropTypes.shape({
    subheading: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Introduction);
