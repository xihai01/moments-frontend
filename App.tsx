import React from 'react';
import { Provider } from 'react-redux';
import { Provider as AuthProvider } from 'src/components/context/AuthContext';

import Main from './src/index';
import { store } from './src/redux/store';

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Main />
      </Provider>
    </AuthProvider>
  );
}

//registerRootComponent(App);
export default App;
