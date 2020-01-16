import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Navigate from './navigation/navigate';

export default function App() {
  return (
    <Provider store={store}>
      <Navigate />
    </Provider>
  );
}
