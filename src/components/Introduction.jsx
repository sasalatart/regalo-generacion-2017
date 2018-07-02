import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  subheading: theme.baseFont,
});

function Introduction({ classes }) {
  return (
    <Fragment>
      <Typography variant="display1" align="center" gutterBottom>
        Regalo de Generación 2017
      </Typography>

      <Typography variant="headline" align="center" gutterBottom>
        Una nueva propuesta
      </Typography>

      <Typography variant="subheading" align="justify" className={classes.subheading} gutterBottom>
        El 2010 egresados de Ingeniería UC fundaron la tradición de que cada generación de{' '}
        titulados haga un regalo a los estudiantes del programa Talento + Inclusión de la{' '}
        Escuela. Este año generamos una nueva propuesta: darle la oportunidad a ex-alumnos y {' '}
        ex-alumnas para participar dando consejos o compartiendo experiencias con estudiantes.
      </Typography>
    </Fragment>
  );
}

Introduction.propTypes = {
  classes: PropTypes.shape({
    subheading: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Introduction);
