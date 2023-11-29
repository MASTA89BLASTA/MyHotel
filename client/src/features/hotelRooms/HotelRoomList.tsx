import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import type HotelRoom from './redux/types/HotelRoom';
import { useAppDispatch, type RootState } from '../../store';
import HotelRoomCard from './HotelRoomCard';

function HotelRoomList(): JSX.Element {
  const hotelRoomList = useSelector((store: RootState) => store.hotelRoomReducer.hotelRoomList);
  const dispatch = useAppDispatch()

  useEffect(()=> {
    fetch("/api/hotelRooms")
      .then((response) => response.json())
      .then((data: {hotelRooms :HotelRoom[]}) => {
        console.log(data);
        // меняем стейт (чтобы перерисовалось на страничке)
        dispatch({ type: "hotelRooms/load", payload: data.hotelRooms });
      })
      .catch((e) => console.log(e))
  }, []);
  return (
    <div>
      {hotelRoomList.map((hotelRoom) => (
      <HotelRoomCard hotelRoom={hotelRoom} key={hotelRoom.id} />
    ))}
    </div>
  );
}

export default HotelRoomList;
