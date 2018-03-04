import React from 'react';
import {
  connect,
} from 'react-redux';

import Actions from '../state/Actions';
import OutfitDetails from '../components/OutfitDetails';

@connect((data, props) => OutfitDetailsScreen.getDataProps(data, props))
export default class OutfitDetailsScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  static getDataProps(data, props) {
    let outfitId = props.navigation.state.params.outfitId;
    let outfit = data.outfits.all.find(outfit => outfit.id === outfitId);

    return {
      outfit,
    };
  }

  render() {
    return (
      <OutfitDetails
        outfit={this.props.outfit}
        isVisited={this.props.isVisited}
        onToggleVisited={this._onToggleVisited}
      />
    );
  }
}
