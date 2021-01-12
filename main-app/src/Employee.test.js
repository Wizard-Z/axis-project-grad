import { shallow } from 'enzyme'
import ListEmployeeComponent from './components/ListEmployeeComponent';

test('render employee', ()=>{
    const component1 = shallow(<ListEmployeeComponent />)
    const component2 = component1.find('.text-center')
    expect(component2.length).toBe(1);
  })