import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import type HotelRoom from './redux/types/HotelRoom';
import { type RootState } from '../../store';

export default function HotelRoomPage(): JSX.Element {
  // достаем из адресной строки id
  // (название переменной совпадает с параметризированным запросом в компонента Route)
  const { id } = useParams();

  const hotelRoomList = useSelector((store: RootState) => store.hotelRoomReducer.hotelRoomList);

  const hotelRoom: HotelRoom | undefined = hotelRoomList.find((room) => room.id === Number(id));
  return (
    <>
      <div className="container vacancy-card">
        {hotelRoom && (
          <>
            <h4>{hotelRoom.price}</h4>
            <b>{hotelRoom.roomNumber}</b>
            <p>{hotelRoom.rating}</p>
            <p>{hotelRoom.levelName}</p>
            <img src={hotelRoom.img} alt="#" />
          </>
        )}
      </div>
    </>
  );
}
