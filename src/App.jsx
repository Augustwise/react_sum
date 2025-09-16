import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum number1={2} number2={3} />
    <Sum number1={-5} number2={5} />
    <Sum number1={10}/>
    <Sum number2={5} />
    <Sum />
  </>
);
