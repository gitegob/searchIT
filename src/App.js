import React, { useEffect, useContext } from 'react';
import '../src/App.css';
import { NavBar } from './components/NavBar';
import { SuggestBox } from './components/SuggestBox';
import { Remark } from './components/Remark';
import { Cities } from './components/Cities';
import { GlobalContext } from './contexts/GlobalContext';

const App = () => {
  const { setCities } = useContext(GlobalContext);
  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json',
    )
      .then((res) => res.json())
      .then((result) => {
        setCities(result);
      });
  }, [setCities]);

  return (
    <>
      <NavBar />
      <SuggestBox />
      <Remark />
      <Cities />
    </>
  );
};

export default App;
