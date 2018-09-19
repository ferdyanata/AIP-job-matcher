import React from 'react';
import Main from './components/Main/Main'
import FooterLayout from './components/FooterLayout/FooterLayout'
import HeaderLayout from './components/HeaderLayout/HeaderLayout';

//See https://github.com/le-kang/AIP2018/blob/master/week04/react-router-example/src/App.js for routing

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderLayout />
        <Main />
        <FooterLayout />
      </div>
    );
  }
}

export default App;