import React from 'react';
import {
  ActivityIndicator,
  Animated,
  FlatList,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import OutfitListItem from './OutfitListItem';

function outfitsFromIds(all, ids) {
  return ids.map(id => all.find(outfit => outfit.id === id));
}

@withNavigation
@connect((data, props) => OutfitList.getDataProps(data, props))
export default class OutfitList extends React.Component {
  static getDataProps(data, props) {
    let { outfits } = data;
    let { all, nearby, visited } = outfits;

    if (props.nearby) {
      outfits = outfitsFromIds(all, nearby);
    } else if (props.visited) {
      outfits = outfitsFromIds(all, visited);
    } else if (props.notVisited) {
      let allOutfitIds = all.map(outfit => outfit.id);
      let notVisited = allOutfitIds.filter(id => !visited.includes(id));
      outfits = outfitsFromIds(all, notVisited);
    } else {
      outfits = all;
    }

    return {
      outfits,
    };
  }

  state = {
    renderContents: false,
  };

  componentDidMount() {
    this.props.setRef && this.props.setRef(this);
    setTimeout(() => {
      this.setState({ renderContents: true });
    }, 100);
  }

  componentDidUpdate() {
    this.props.setRef && this.props.setRef(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.outfits !== this.props.outfits ||
      nextState.renderContents !== this.state.renderContents
    );
  }

  scrollTo(opts) {
    this._scrollView._component.scrollTo(opts);
  }

  render() {
    return (
      <View onLayout={this.props.onLayout} style={styles.container}>
        {this.state.renderContents ? (
          <FlatList
            ref={view => {
              this._scrollView = view;
            }}
            contentContainerStyle={this.props.contentContainerStyle}
            renderItem={this._renderItem}
            style={styles.container}
            data={this.props.outfits.toJS()}
            keyExtractor={item => item.id}
          />
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: 75,
            }}>
            <ActivityIndicator />
          </View>
        )}

        <StatusBar barStyle="default" />
      </View>
    );
  }

  _renderItem = ({ item }) => {
    return (
      <OutfitListItem
        onPress={() => this._handlePressOutfit(item)}
        outfit={item}
      />
    );
  }

  _handlePressOutfit = outfit => {
    this.props.navigation.navigate('details', { outfitId: outfit.id });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
});
