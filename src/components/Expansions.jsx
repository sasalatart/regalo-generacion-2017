import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Markdown from './Markdown';

class Expansions extends Component {
  state = { expandedPanel: undefined };

  handleClick(index) {
    this.setState(prevState => ({
      expandedPanel: prevState.expandedPanel === index ? undefined : index,
    }));
  }

  isExpanded(index) {
    return this.state.expandedPanel === index;
  }

  render() {
    const { title, description, expansions } = this.props.content;

    return (
      <Fragment>
        <Typography variant="display1" gutterBottom>{title}</Typography>
        <Markdown>{description}</Markdown>

        {expansions.map(({ header, content }, index) => (
          <ExpansionPanel key={header} expanded={this.isExpanded(index)}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              onClick={() => this.handleClick(index)}
            >
              <Typography variant="title">{header}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Markdown>{content}</Markdown>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </Fragment>
    );
  }
}

Expansions.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    expansions: PropTypes.arrayOf(PropTypes.shape({
      header: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Expansions;
