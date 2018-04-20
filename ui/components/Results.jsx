import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';


export default class Results extends React.Component {
  render() {
    const results = this.props.results.map((result) => (
      <ListItem
        primaryText={result}
        onClick={() => window.open(`http://${result}`, "_blank")}
      />
    ))
    return (
      <List>
        <Subheader show={results.length}>{`Showing ${results.length} results out of ${this.props.total}`}</Subheader>
        {results}
      </List>
    )
  }
}
