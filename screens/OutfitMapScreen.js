import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { MapView } from 'expo';

@connect(data => OutfitMapScreen.getDataProps(data))
export default class OutfitMapScreen extends React.Component {
  static getDataProps(data) {
    return {
      outfits: data.outfits.all,
    };
  }

  render() {
    let { outfits } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={styles.map}
          loadingBackgroundColor="#f9f5ed"
          showsUserLocation
          initialRegion={{
            latitude: 30.253956,
            longitude: -97.7499279,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}>
          {this.props.outfits.map(outfit => {
            let { latitude, longitude, name, isOpen } = outfit;

            return (
              <MapView.Marker
                key={name}
                pinColor={isOpen ? 'green' : 'red'}
                coordinate={{ latitude, longitude }}
                title={name}
              />
            );
          })}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
