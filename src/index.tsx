import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as S from './style'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <S.Corpo>
      <App />
    </S.Corpo>
  </React.StrictMode>
);
