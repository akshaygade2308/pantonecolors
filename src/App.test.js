import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
// import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import add from './App'

configure({adapter: new Adapter()});

describe('<App />', () =>{
  it('renders', () => {
    const a = shallow(<App />)
    // ReactDOM.render(<App />, div);
    expect(a.find('input').length).toEqual(1);
  });
})


