import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MentoringDialog from './Dialog';

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
    const commonProps = { gutterBottom: true, align: 'justify' };

    return (
      <Fragment>
        <Typography variant="display1" align="center" gutterBottom>
          Mentorías
        </Typography>

        <Typography variant="subheading" className={classes.body} {...commonProps}>
          Si tienes ganas de reunirte con estudiantes a tomarse un café y conversar respecto{' '}
          a la carrera, experiencias extracurriculares (o personales), o decisiones{' '}
          profesionales, te invitamos a participar dentro de este proyecto.
        </Typography>

        <Typography variant="subheading" className={classes.body} {...commonProps}>
          Creemos que no hay nadie mejor que un ex-alumno para poder orientar en torno a qué{' '}
          especialidad tomar, cómo enfrentar dificultades personales o académicas, participar{' '}
          en las selecciones UC, irse de intercambio, o cualquier otra vivencia que haya sido{' '}
          importante para tí y creas que pueda ser de ayuda para las nuevas generaciones.
        </Typography>

        <div className={classes.buttonWrapper}>
          <Button variant="contained" color="primary" onClick={this.handleOpenMoreInfo} className={classes.button}>
            Más Información
          </Button>
        </div>

        <MentoringDialog open={this.state.modalOpen} onClose={this.handleCloseMoreInfo} />
      </Fragment>
    );
  }
}

export default withStyles(styles)(Mentoring);
