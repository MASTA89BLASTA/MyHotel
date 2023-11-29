import type HotelRoom from './HotelRoom';

type Action =
  | {
      type: 'hotelRooms/load';
      payload: HotelRoom[];
    }
  | {
      type: 'hotelRooms/add';
      payload: HotelRoom;
    };

export default Action;
