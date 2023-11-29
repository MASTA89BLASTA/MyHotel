import React from 'react';
import { Link } from 'react-router-dom';
import type HotelRoom from './redux/types/HotelRoom';

type HotelRoomPropsType = {
  hotelRoom: HotelRoom;
};

function HotelRoomCard({ hotelRoom }: HotelRoomPropsType): JSX.Element {
  //  const dispatch = useAppDispatch();
  return (
    <div key={hotelRoom.id}>
      {/* <h4>{hotelRoom.price}</h4> */}
      <div className="cards_block-number_six-settings bg-cards_settings cards_block-left-space cards_block-elements_space">
        <div id="room_slider1" className="cards_block-settings_hotel-room_slider">
          <div className="cards_block-settings_hotel-room_arrows-gradient_wrapper">
            <div className="cards_block-settings_hotel-room_arrows-gradient">
              <div className="cards_block-settings_hotel-room_left-arrow_gradient"></div>
              <div className="cards_block-settings_hotel-room_right-arrow_gradient"></div>
            </div>
          </div>
          <a
            href="#"
            className="cards_block-settings_hotel-room_arrows cards_block-settings_hotel-room_left-arrow"
          ></a>
          <Link to={`/hotelRoom/${hotelRoom.id}`}>
            {' '}
            <div id="room_picture1" className="cards_block-settings_hotel-room_picture">
              <img
                src={hotelRoom.img}
                className="hotel-room_picture hotel-room_picture-active_img"
              />
              {/* <img src="assets/img/hotel_room2.jpg" className="hotel-room_picture" />
          <img src="assets/img/hotel_room3.jpg" className="hotel-room_picture" />
          <img src="assets/img/hotel_room4.jpg" className="hotel-room_picture" /> */}
            </div>
          </Link>
          {/* <div className="cards_block-settings_hotel-room_slider-dots">
        <a href="#" className="hotel-room_slider-dot hotel-room_slider-dot_active"></a>
        <a href="#" className="hotel-room_slider-dot"></a>
        <a href="#" className="hotel-room_slider-dot"></a>
        <a href="#" className="hotel-room_slider-dot"></a>
      </div>
      <a href="#" className="cards_block-settings_hotel-room_arrows cards_block-settings_hotel-room_right-arrow"></a> */}
        </div>

        <div className="cards_block-settings_hotel-room_level">
          <div className="cards_block-settings_hotel-room_level-title">
            <div className="cards_block-settings_hotel-room_level-left">
              <h2 className="cards_block-settings_hotel-room_level-number_h2">
                <span className="cards_block-settings_room-number">№</span>
                {hotelRoom.roomNumber}
                <span className="cards_block-settings_room-category">{hotelRoom.levelName}</span>
              </h2>
            </div>
            <div className="cards_block-settings_hotel-room_level-right">
              <h2 className="cards_block-settings_hotel-room_level-cost">
                {hotelRoom.price}₽
                <span className="cards_block-settings_room-cost_text">в сутки</span>
              </h2>
            </div>
            <div className="cards_block-settings_hotel-room_level-line"></div>
          </div>

          <div className="cards_block-settings_hotel-room_stars-reviews">
            <div className="cards_block-settings_hotel-room_stars-left">
              <div className="form_elements-rate_buttons">
                <div className="form_elements-rate">
                  <label className="rate_label" htmlFor="rate_1">
                    <input
                      className="rate_input"
                      name={hotelRoom.rating}
                      type="checkbox"
                      id="rate_1"
                    />
                    <span className="rate_mark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="cards_block-settings_hotel-room_reviews-right">
              <h2 className="cards_block-settings_hotel-room_reviews">
                145
                <span className="cards_block-settings_room-reviews_text">Отзывов</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* <b>{hotelRoom.roomNumber}</b>
      <p>{hotelRoom.rating}</p>
      <p>{hotelRoom.levelName}</p>
      <img src={hotelRoom.img} alt="" /> */}
    </div>
  );
}

export default React.memo(HotelRoomCard);
