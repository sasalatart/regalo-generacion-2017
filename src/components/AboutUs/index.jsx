import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import TeamMember from './TeamMember';
import team from '../../lib/team';

const styles = theme => ({
  body: theme.baseFont,
  teamOuterWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  teamInnerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '620px',
  },
});

function AboutUs({ classes }) {
  return (
    <Fragment>
      <Typography variant="display1" align="center" gutterBottom>
        ¿Quiénes somos?
      </Typography>

      <Typography variant="subheading" align="justify" className={classes.body} gutterBottom>
        Somos graduados del 2017 (¡al igual que tu!), y decidimos organizar este regalo en{' '}
        conjunto con la Escuela. Notamos que podíamos aportar con algo más que dinero.{' '}
        Queremos generar un cambio cultural en la relación de los ex-alumnos con la Escuela, y{' '}
        apoyar a los actuales alumnos con nuestras propias experiencias de cuando estuvimos{' '}
        en sus zapatos.
      </Typography>

      <div className={classes.teamOuterWrapper}>
        <div className={classes.teamInnerWrapper}>
          {team.map(teamMember => <TeamMember key={teamMember.name} {...teamMember} />)}
        </div>
      </div>
    </Fragment>
  );
}

AboutUs.propTypes = {
  classes: PropTypes.shape({
    body: PropTypes.string.isRequired,
    teamOuterWrapper: PropTypes.string.isRequired,
    teamInnerWrapper: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(AboutUs);
