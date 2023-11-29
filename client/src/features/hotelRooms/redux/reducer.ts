import type Action from './types/Action';
import type State from './types/State';

export const initState: State = {
  hotelRoomList: [],
};

function reducer(state: State = initState, action: Action): State {
  switch (action.type) {
    case 'hotelRooms/load':
      return {
        ...state,
        hotelRoomList: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;