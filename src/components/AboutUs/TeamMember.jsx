import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const styles = {
  outerWrapper: {
    margin: '5px',
  },
  innerWrapper: {
    position: 'relative',
  },
  infoContainer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    padding: '7px 10px',
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0) 100%)',
  },
  infoText: {
    color: '#fff',
  },
};

function TeamMember({
  name,
  studied,
  image,
  classes,
}) {
  return (
    <div className={classes.outerWrapper}>
      <div className={classes.innerWrapper}>
        <img src={image} alt={name} />
        <div className={classes.infoContainer}>
          <Typography variant="body2" className={classes.infoText}>{name}</Typography>
          <Typography variant="body1" className={classes.infoText}>{studied}</Typography>
        </div>
      </div>
    </div>
  );
}

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  studied: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    outerWrapper: PropTypes.string.isRequired,
    innerWrapper: PropTypes.string.isRequired,
    infoContainer: PropTypes.string.isRequired,
    infoText: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(TeamMember);
