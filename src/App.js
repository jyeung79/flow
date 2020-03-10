import React from 'react';
import {Header} from './components/layouts/Header';
import {Content } from './components/layouts/Content'

export const App = () => (
  // explicit vs implicit return
  <div className="App antialiased leading-none">
    <Header />
    <Content />
  </div>
);