import LocalStorage from '../state/LocalStorage';

export default function updateVisitedCacheAsync({getState}) {
  let { outfits } = getState();
  let { visited } = outfits;
  console.log("These are all the visited ones " + JSON.stringify(visited));

  LocalStorage.saveVisitedOutfitsAsync(visited.toJS());
}
