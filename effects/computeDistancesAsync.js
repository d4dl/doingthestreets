import {
  Platform,
} from 'react-native';
import {
  Location,
  Permissions,
} from 'expo';
import geolib from 'geolib';

import Actions from '../state/Actions';

export default async function computeDistancesAsync({dispatch, getState}) {
  let { outfits } = getState();
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') { return; }

  let { coords } = await Location.getCurrentPositionAsync({
    enableHighAccuracy: Platform.OS === 'ios',
  });

  let outfitsWithDistances = outfits.all.map(outfit => {
    let distanceM = geolib.getDistance(
      {latitude: coords.latitude, longitude: coords.longitude},
      {latitude: outfit.latitude, longitude: outfit.longitude}
    );

    let distanceKm = (distanceM / 1000.0).toFixed(2);
    let formattedDistance = `${distanceKm}km`;

    let direction = geolib.getCompassDirection(
      {latitude: coords.latitude, longitude: coords.longitude},
      {latitude: outfit.latitude, longitude: outfit.longitude},
    );

    return outfit.
      set('distance', formattedDistance).
      set('direction', direction);
  });


  let nearbyOutfits = outfitsWithDistances.
    sortBy(outfit => outfit.distance).
    map(outfit => outfit.id);

  dispatch(Actions.setOutfits(outfitsWithDistances));
  dispatch(Actions.setNearbyOutfits(nearbyOutfits));
}
