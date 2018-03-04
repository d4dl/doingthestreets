import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { Svg, Constants } from 'expo';

import { Svgx } from 'react-native-svgx';
import FadeIn from 'react-native-fade-in-image';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import { MaterialIcons } from '@expo/vector-icons';

import Layout from '../constants/Layout';
import { RegularText, BoldText } from './StyledText';
import formatTime from '../util/formatTime';
const svgStyles = {
  // change the default image size
  height: 38,
  width: 38,
  // it supports specific styles for each shape
  // in the image by usign the element id
  'checkmark-path': {
    fill: '#000000'
  },
  'circle-path': {
    fill: '#222222'
  }
};

export default class OutfitListItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.outfit !== this.props.outfit;
  }

  render() {
    let { smallLogo, name } = this.props.outfit;
    let svg = smallLogo ? <Svgx {...{
      component: Svg,
      data: smallLogo,
      styles: svgStyles
    }} /> : <Svg
        width="120"
        height="120"
    >
      <Svg.Rect
          x="25"
          y="5"
          width="80"
          height="80"
          fill="rgb(0,0,255)"
          strokeWidth="3"
          stroke="rgb(0,0,0)"
      />
    </Svg>

    return (
      <TouchableNativeFeedback
        delayPressIn={80}
        onPress={this.props.onPress}
        delayPressIn={80}
        style={styles.container}
        fallback={TouchableHighlight}
        underlayColor="#ccc">
        <View style={styles.logoContainer}>
          <FadeIn
            placeholderStyle={{
              backgroundColor:
                Platform.OS === 'android' ? 'transparent' : '#eee',
            }}>
            {svg}
          </FadeIn>
        </View>

        <View style={styles.infoContainer}>
          <RegularText style={styles.name}>{name}</RegularText>

          <RegularText style={styles.hours}>
            {this._renderHoursText()}
          </RegularText>

          <RegularText style={styles.address}>
            {this._renderAddressText()}
          </RegularText>
        </View>

        <View style={styles.buttonContainer}>
          <MaterialIcons name="chevron-right" size={30} color="#b8c3c9" />
        </View>
      </TouchableNativeFeedback>
    );
  }

  _renderHoursText() {
    return this.props.outfit.hours;
  }

  _renderAddressText() {
    let { address, distance, direction } = this.props.outfit;

    let addressText = address;

    if (distance) {
      addressText = `${distance} ${direction.exact} - ${addressText}`;
    }

    return addressText;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: Platform.OS === 'android' ? 1 : StyleSheet.hairlineWidth,
    width: Layout.window.width,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 16,
  },
  hours: {
    fontSize: 12,
  },
  address: {
    fontSize: 12,
  },
  logoContainer: {
    padding: 15,
  },
  logo: {
    width: 60,
    height: 60,
  },
  buttonContainer: {
    paddingRight: 5,
  },
});
