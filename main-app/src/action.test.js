import moxios from 'moxios'
import { createStore, applyMiddleware } from 'redux';
import { middleware } from './store';
import { getEmployee } from './actions/EmployeeActions';
import store  from './store';
import { composeWithDevTools } from 'redux-devtools-extension';


describe('employee Action',()=>{
    beforeEach(()=>{
        moxios.install()
    })

    afterEach(()=>{
        moxios.uninstall();
    })

    test("State updation",()=>{
        const expectedEmployees=[{employeeId:"1",firstName:"Akshay",lastName:"Kumar"},
        {employeeId:"2",firstName:"Priyam",lastName:"Kumar"}]

        const store=()=>{
            const cStore= composeWithDevTools(applyMiddleware(...middleware))(createStore);
            return cStore;
        }
        const testStore= store();

        moxios.wait(async()=>{
            const request = moxios.mostRecent();
            request.responseWith({
                status:200,
                response:expectedEmployees
            })
        })
        return testStore.dispatch(getEmployee).then(()=>{
            const newState  = test.getState();
            expect(newState.employee.employeeList).toBe(expectedEmployees)
        })
    })
})
