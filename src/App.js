import React from 'react';
import { Provider } from "react-redux";
import store from './store';

import Feed from './components/Feed';
import LuckyDoor from './components/LuckyDoor';

const App = () => {
  return (
    <div>
    <main>
      <Provider store={ store }>
           <Feed />
           <LuckyDoor />
      </Provider>
    </main>
    </div>
  )
}

export default App
