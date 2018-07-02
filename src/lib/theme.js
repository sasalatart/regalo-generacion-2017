import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export default createMuiTheme({
  baseFont: {
    lineHeight: '2',
    color: '#777',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  mainContainer: {
    zIndex: '12',
    paddingTop: '25px',
    paddingBottom: '25px',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%',
    '@media (min-width: 576px)': {
      maxWidth: '540px',
    },
    '@media (min-width: 768px)': {
      maxWidth: '720px',
    },
    '@media (min-width: 992px)': {
      maxWidth: '960px',
    },
    '@media (min-width: 1200px)': {
      maxWidth: '1140px',
    },
  },
});
