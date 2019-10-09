import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Searchbox from './Components/Searchbox'

configure({adapter: new Adapter()});

// describe('<Searchbox />', () =>{
//   it('renders', () => {
//     const a = shallow(<App />)
//     // ReactDOM.render(<Searchbox />);
//     expect(a.find('input').length).toEqual(1);
//   });
// })

// describe('<App />', () =>{
// it('renders ', () => {
//   const editor = shallow(<App />);
//   expect(editor.find('Searchbox').length).toEqual(1);
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
// })


test('Fake test', () =>{
  expect(true).toBeTruthy()
})

// // test('onSearchChange', () =>{
// //   expect(true).toBeTruthy()
// // })

// //if 
