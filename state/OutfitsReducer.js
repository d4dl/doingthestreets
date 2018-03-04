import ActionTypes from './ActionTypes';
import { OutfitsState, Outfit } from './Records';

class OutfitsReducer {
  static reduce(state = new OutfitsState(), action) {
    if (OutfitsReducer[action.type]) {
      return OutfitsReducer[action.type](state, action);
    } else {
      return state;
    }
  }

  static [ActionTypes.SET_OUTFITS](state, action) {
    let outfits = action.outfits.sortBy(outfit => outfit.name);
    return state.set('all', outfits);
  }

  static [ActionTypes.SET_NEARBY_OUTFITS](state, action) {
    return state.set('nearby', action.outfitIds);
  }

  static [ActionTypes.SET_VISITED_OUTFITS](state, action) {
    return state.set('visited', action.outfitIds);
  }

  static [ActionTypes.ADD_VISITED_OUTFIT](state, action) {
    let visited = state.visited.push(action.outfitId);
    return state.set('visited', visited);
  }

  static [ActionTypes.REMOVE_VISITED_OUTFIT](state, action) {
    let index = state.visited.indexOf(action.outfitId);

    if (index === -1) {
      return state;
    }

    return state.set('visited', state.visited.delete(index));
  }
}

export default OutfitsReducer.reduce;
