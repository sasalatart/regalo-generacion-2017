import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  card: {
    maxWidth: 345,
    margin: '15px',
  },
  media: theme.media,
  divider: {
    margin: '10px 50px',
  },
  description: {
    lineHeight: '1.6',
    color: theme.baseFont.color,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
  },
});

function ModeCard({
  image,
  headline,
  subheading,
  description,
  onClick,
  classes,
}) {
  return (
    <Card className={classes.card}>
      <CardMedia image={image} className={classes.media} />
      <CardContent>
        <Typography variant="headline" align="center">
          {headline}
        </Typography>
        <Typography variant="subheading" align="center">
          {subheading}
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="body1" align="center" className={classes.description}>
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button variant="contained" size="small" color="primary" onClick={onClick}>
          Más Información
        </Button>
      </CardActions>
    </Card>
  );
}

ModeCard.propTypes = {
  image: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    card: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
    divider: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cardActions: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(ModeCard);
