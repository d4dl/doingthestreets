import { Record, List } from 'immutable';

export const OutfitsState = Record({
  all: new List(),
  nearby: new List(),
  visited: new List(),
});

export const Outfit = Record({
  id: '',
  accentColor: '#000',
  address: '',
  city: '',
  closingTimeToday: '',
  color: '#fff',
  description: '',
  hours: [],
  instagram: '',
  isOpen: false,
  isOpeningLater: '',
  latitude: 0,
  logo: '',
  longitude: 0,
  name: '',
  postalCode: '',
  smallLogo: '',
  street: '',
  summary: '',
  distance: null,
  direction: null,
});

export const User = Record({
  id: null,
  authToken: null,
  name: null,
  isGuest: null,
});
