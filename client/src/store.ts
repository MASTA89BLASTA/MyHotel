import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useDispatch } from 'react-redux';

import hotelRoomReducer from "./features/hotelRooms/redux/reducer";

const rootReducer = combineReducers({
  hotelRoomReducer,
});

// создаем наш redux store
const store = createStore(rootReducer, composeWithDevTools());

//  протипизировать глобальный стор для useSelector
export type RootState = ReturnType<typeof store.getState>;
// типизируем наш диспатч, чтобы он нам подсказывал нам тип функции dispatch, который возвращается из Redux Store.
type AppDispatch = typeof store.dispatch;

/*
useAppDispatch создает хук useAppDispatch, 
который используется для получения типизированной функции dispatch из Redux Store 
в компонентах React.
useDispatch из 'react-redux' возвращает функцию dispatch. 
Используем useAppDispatch, чтобы добавить типизацию этой функции с помощью AppDispatch.
*/
export const useAppDispatch: () => AppDispatch = useDispatch;

// store экспортируется по умолчанию, чтобы он был доступен для использования в других частях приложения.
export default store;