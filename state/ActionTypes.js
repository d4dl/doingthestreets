export default defineActionConstants([
  'SET_CURRENT_USER',
  'SIGN_IN',
  'SIGN_OUT',
  'SET_OUTFITS',
  'COMPUTE_DISTANCES',
  'SET_NEARBY_OUTFITS',
  'SET_VISITED_OUTFITS',
  'ADD_VISITED_OUTFIT',
  'REMOVE_VISITED_OUTFIT',
  'TOGGLE_VISITED_OUTFIT',
]);

function defineActionConstants(names) {
  return names.reduce((result, name) => {
    result[name] = name;
    return result;
  }, {});
}
