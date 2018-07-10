import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import ModeCard from './ModeCard';
import donationModes from '../../../lib/donation-modes';
import teachingImage from '../../../assets/images/donation-modes/teaching.jpg';
import studyMaterialImage from '../../../assets/images/donation-modes/study-material.jpg';
import monetaryImage from '../../../assets/images/donation-modes/monetary.jpg';

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
};

function DonationModes({ onModeClick, classes }) {
  return (
    <Fragment>
      <Typography variant="display1" align="center" gutterBottom>
        Otras formas de aportar
      </Typography>
      <div className={classes.wrapper}>
        <ModeCard
          headline='"GOing": Tutorías académicas'
          subheading="De ex-alumnos para alumnos"
          image={teachingImage}
          description="Dona tus horas para hacer tutorías académicas a estudiantes para mejorar su rendimiento académico en los ramos de ciencias básicas."
          onClick={() => onModeClick(donationModes.teachingContents)}
        />
        <ModeCard
          headline="Material de estudio"
          subheading="De generación en generación"
          image={studyMaterialImage}
          description="Dona tu material de estudio para que los nuevos estudiantes de T+I mejoren su rendimiento académico."
          onClick={() => onModeClick(donationModes.studyMateriaContents)}
        />
        <ModeCard
          headline="Aporte monetario"
          subheading="Fondos de manutención"
          image={monetaryImage}
          description="Dona dinero para evitar que algunos estudiantes de T+I disminuyan su rendimiento académico al verse obligados(as) a trabajar para cubrir sus necesidades básicas."
          onClick={() => onModeClick(donationModes.monetaryContents)}
        />
      </div>
    </Fragment>
  );
}

DonationModes.propTypes = {
  onModeClick: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    wrapper: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(DonationModes);
