import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});

test('class App test', ()=>{
  const component1 = shallow(<App />)
  const component2 = component1.find('.container')
  expect(component2.length).toBe(1);
})
