import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import MarkdownRenderer from 'markdown-to-jsx';

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        variant: 'display2',
        gutterBottom: true,
      },
    },
    h2: {
      component: Typography,
      props: {
        variant: 'display1',
        gutterBottom: true,
      },
    },
    h3: {
      component: Typography,
      props: {
        variant: 'headline',
        gutterBottom: true,
      },
    },
    h4: {
      component: Typography,
      props: {
        variant: 'title',
        gutterBottom: true,
      },
    },
    span: {
      component: Typography,
      props: {
        variant: 'body1',
        align: 'justify',
        gutterBottom: true,
        style: {
          lineHeight: '2',
          color: '#777',
          margin: '15px 0',
        },
      },
    },
    p: {
      component: Typography,
      props: {
        variant: 'body1',
        align: 'justify',
        gutterBottom: true,
        style: {
          lineHeight: '2',
          color: '#777',
          margin: '15px 0',
        },
      },
    },
    blockquote: {
      component: Typography,
      props: {
        component: 'blockquote',
        variant: 'body1',
        align: 'justify',
        gutterBottom: true,
        style: {
          textAlign: 'justify',
          background: '#f9f9f9',
          borderLeft: '10px solid #ccc',
          margin: '1.5em 10px',
          padding: '0.5em 10px',
        },
      },
    },
  },
};

function Markdown({ children }) {
  return (
    <MarkdownRenderer options={options}>
      {children}
    </MarkdownRenderer>
  );
}

Markdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Markdown;
