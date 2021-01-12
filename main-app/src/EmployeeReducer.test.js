import employeeReducer from './reducer/EmployeeReducer'


describe('Reducer test',()=>{
    test('Default state',()=>{
        const newState = employeeReducer(undefined, {});
        expect(newState.employeeList).toEqual(null)
    })

    test("return updated state",()=>{
        const employee=[{employeeId:"1",firstName:"Akshay",lastName:"Kumar"},
        {employeeId:"2",firstName:"Priyam",lastName:"Kumar"}]

        const newState=employeeReducer(undefined,{
            type:"GET_EMPLOYEES",
            pload:employee
        })
    })
})