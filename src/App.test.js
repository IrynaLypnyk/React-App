import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './components2/app/app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Wrapper />, div);
  ReactDOM.unmountComponentAtNode(div);
});
