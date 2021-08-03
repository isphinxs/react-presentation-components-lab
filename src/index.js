import { render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const changeText = function() {
  console.log("Clicked!");
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={changeText} />
  </div>,
  document.getElementById('root')
);