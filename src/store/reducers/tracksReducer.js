const INIT_STATE = {
  tracker: [],
};

export default function reducerTracks(state = INIT_STATE, action) {
  switch (action.type) {
    case 'GET_TRACKS':
    	return { tracker: action.payload};
    default:
      return state;
  }
}

