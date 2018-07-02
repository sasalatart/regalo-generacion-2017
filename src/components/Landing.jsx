import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Parallax from './Parallax';
import Introduction from './Introduction';
import Mentoring from './Mentoring';
import DonationModes from './DonationModes';
import AboutUs from './AboutUs';
import Footer from './Footer';

const landingPageStyle = theme => ({
  main: {
    padding: '25px 15px',
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  container: theme.mainContainer,
  title: {
    margin: '1.75rem 0 0.875rem',
    fontWeight: '700',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: '1.313rem',
    color: '#FFFFFF',
  },
  divider: {
    margin: '33px 0',
  },
});

function LandingPage({ classes }) {
  return (
    <Fragment>
      <Parallax>
        <div className={classes.container}>
          <Typography variant="display3" align="center" className={classes.title} gutterBottom>
            Regalo de Generación 2017
          </Typography>
          <Typography variant="headline" align="center" className={classes.subtitle}>
            Cada año la generación de titulados le entrega un regalo a los alumnos de Talento{' '}
            e Inclusión. Este año hemos querido sumar una plataforma de mentoring a esta iniciativa.
          </Typography>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <Introduction />
          <Divider className={classes.divider} />

          <Mentoring />
          <Divider className={classes.divider} />

          <DonationModes />
          <Divider className={classes.divider} />

          <AboutUs />
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}

LandingPage.propTypes = {
  classes: PropTypes.shape({
    main: PropTypes.string.isRequired,
    container: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    divider: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(landingPageStyle)(LandingPage);
