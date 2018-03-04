import { AsyncStorage } from 'react-native';

const Keys = {
  User: 'User',
  VisitedOutfits: 'Visited',
};

async function getUserAsync() {
  let results = await AsyncStorage.getItem(Keys.User);

  try {
    return JSON.parse(results);
  } catch(e) {
    return null;
  }
}

function saveUserAsync(user) {
  return AsyncStorage.setItem(Keys.User, JSON.stringify(user));
}

function removeUserAsync() {
  return AsyncStorage.removeItem(Keys.User);
}

function saveVisitedOutfitsAsync(outfitIds) {
  return AsyncStorage.setItem(Keys.VisitedOutfits, JSON.stringify(outfitIds));
}

async function getVisitedOutfitsAsync() {
  let results = await AsyncStorage.getItem(Keys.VisitedOutfits);

  try {
    return JSON.parse(results);
  } catch(e) {
    return null;
  }
}

function clearAllAsync() {
  return AsyncStorage.clear();
}

export default {
  saveUserAsync,
  getUserAsync,
  removeUserAsync,
  saveVisitedOutfitsAsync,
  getVisitedOutfitsAsync,
  clearAllAsync,
};
