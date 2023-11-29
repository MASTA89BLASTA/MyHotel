import React from 'react';
import { Route, Routes } from 'react-router';
import { useAppDispatch } from '../store';
import Layout from './Layout';
import MainPage from './MainPage';
import './Header.css';
import './Footer.css';
import '../features/hotelRooms/HotelRoom.css';
import './App.css';
import './fonts.css';
import HotelRoomPage from '../features/hotelRooms/HotelRoomPage';

function App(): JSX.Element {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   fetch('/api/auth/check')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.message === 'success') {
  //         const userData: User = data.user;
  //         dispatch({ type: 'user/login', payload: userData });
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/hotelRoom/:id" element={<HotelRoomPage />} />
      </Route>
    </Routes>
  );
}

export default App;
