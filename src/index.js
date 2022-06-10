import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// context api
import { DataLayer } from './DataLayer';

//reducer
const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
}

const reducer = (state, action) => {
  console.log(action);

  //action -> type, payload

  switch(action.type){
      case 'SET_USER':
          return {
              ...state, 
              user: action.user
          }
      case 'SET_TOKEN':
        return{
          ...state,
          token: action.token
        }
      default:
          return state;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
