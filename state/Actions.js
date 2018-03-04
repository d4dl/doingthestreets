import ActionTypes from './ActionTypes';

export default class Actions {
  static setCurrentUser(user) {
    return {
      type: ActionTypes.SET_CURRENT_USER,
      user,
    }
  }

  static signIn(user) {
    return {
      type: ActionTypes.SIGN_IN,
      user,
    }
  }

  static signOut() {
    return {
      type: ActionTypes.SIGN_OUT,
    }
  }

  static setOutfits(outfits) {
    return {
      type: ActionTypes.SET_OUTFITS,
      outfits,
    }
  }

  static setNearbyOutfits(outfitIds) {
    return {
      type: ActionTypes.SET_NEARBY_OUTFITS,
      outfitIds,
    }
  }

  static setVisitedOutfits(outfitIds) {
    return {
      type: ActionTypes.SET_VISITED_OUTFITS,
      outfitIds,
    }
  }

  static toggleVisitedOutfit(outfitId) {
    return {
      type: ActionTypes.TOGGLE_VISITED_OUTFIT,
      outfitId,
    }
  }

  static addVisitedOutfit(outfitId) {
    return {
      type: ActionTypes.ADD_VISITED_OUTFIT,
      outfitId,
    }
  }

  static removeVisitedOutfit(outfitId) {
    return {
      type: ActionTypes.REMOVE_VISITED_OUTFIT,
      outfitId,
    }
  }

  static computeDistances() {
    return {
      type: ActionTypes.COMPUTE_DISTANCES,
    }
  }
}
