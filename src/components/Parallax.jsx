import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import g2010Image from '../assets/images/g2010.jpg';
import g2011Image from '../assets/images/g2011.jpg';
import g2012Image from '../assets/images/g2012.jpg';

const styles = {
  parallax: {
    display: 'flex',
    alignItems: 'center',
    height: '90vh',
    maxHeight: '1000px',
    position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    padding: '0',
    margin: '0',
    border: '0',
    transition: 'background-image 0.5s ease-in-out',
    overflow: 'hidden',
    '&:before': {
      background: 'rgba(0, 0, 0, 0.5)',
    },
    '&:after,&:before': {
      display: 'block',
      position: 'absolute',
      zIndex: '1',
      width: '100%',
      height: '100%',
      left: '0',
      top: '0',
      content: "''",
    },
  },
};

function getTranslate3d() {
  const windowScrollTop = window.pageYOffset / 3;
  return `translate3d(0, ${windowScrollTop}px, 0)`;
}

class Parallax extends Component {
  state = { transform: getTranslate3d(), image: g2011Image };

  componentDidMount() {
    setInterval(this.resetBackground, 10000);
    this.resetTransform();
    window.addEventListener('scroll', this.resetTransform);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.resetTransform);
  }

  resetBackground = () => {
    let nextImage;
    if (this.state.image === g2010Image) nextImage = g2011Image;
    if (this.state.image === g2011Image) nextImage = g2012Image;
    if (this.state.image === g2012Image) nextImage = g2010Image;
    this.setState({ image: nextImage });
  }

  resetTransform = () => this.setState({ transform: getTranslate3d() });

  render() {
    const { classes, children } = this.props;

    return (
      <div
        className={classes.parallax}
        style={{ backgroundImage: `url(${this.state.image})`, ...this.state }}
      >
        {children}
      </div>
    );
  }
}

Parallax.propTypes = {
  classes: PropTypes.shape({
    parallax: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(Parallax);
