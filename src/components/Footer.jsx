import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: theme.mainContainer,
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Footer({ classes }) {
  return (
    <footer className={classes.container}>
      <div className={classes.footer}>
        <Typography component="a" href="mailto:regalogeneracion@ing.puc.cl" gutterBottom>
          regalogeneracion@ing.puc.cl
        </Typography>
        <Typography component="p" variant="body1">
          2018
        </Typography>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    footer: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Footer);
