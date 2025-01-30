import React from 'react';
import ReactDOM from 'react-dom/client';
import { css } from '@emotion/css';

const color = 'red';

const App = () => (
  <div
    className={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    Hover to change color.
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

