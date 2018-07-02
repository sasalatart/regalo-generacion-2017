import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import teamImage from '../assets/images/team.jpg';

const styles = theme => ({
  body: theme.baseFont,
  card: {
    margin: '15px',
  },
  media: theme.media,
});

function AboutUs({ classes }) {
  return (
    <Fragment>
      <Typography variant="display1" align="center" gutterBottom>
        ¿Quiénes Somos?
      </Typography>

      <Typography variant="subheading" align="center" className={classes.body} gutterBottom>
        Somos graduados del 2017 (¡al igual que tu!), y decidimos organizar este regalo en{' '}
        conjunto con la Escuela.
      </Typography>

      <Typography variant="subheading" align="center" className={classes.body} gutterBottom>
        Notamos que podíamos aportar con algo más que dinero. Queremos generar un cambio{' '}
        cultural en la relación de los ex-alumnos con la Escuela, y apoyar a los actuales{' '}
        alumnos con nuestras propias experiencias de cuando estuvimos en sus zapatos.
      </Typography>

      <Grid container justify="center">
        <Grid item lg={6}>
          <Card className={classes.card}>
            <CardMedia image={teamImage} className={classes.media} />
            <CardContent>
              <Typography variant="body1" align="center">
                Ignacio Oliva - Alicia Quijada - Sebastián Salata - Benjamín Maluenda -{' '}
                Álvaro Meneses - Gonzalo Suazo - Cristian Godoy
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}

AboutUs.propTypes = {
  classes: PropTypes.shape({
    body: PropTypes.string.isRequired,
    card: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(AboutUs);
