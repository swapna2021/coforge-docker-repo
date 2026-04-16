import {createStore,applyMiddleware} from "redux"
import { thunk } from "redux-thunk"
import StudentReducer from "../redux/StudentReducer"
import  api from '../api/StudentApi'
import {addStudent, getAllStudents, getStudentById} from '../redux/StudentActions'

jest.mock('../api/studentApi',()=>({
    __esModule:true,
    default:{
    get:jest.fn(),
    post:jest.fn()
    }
}))

describe('Integration Test for StudentActions with middleware Thunk using jest',()=>{
    let store;

    beforeEach(()=>{
        store=createStore(StudentReducer,applyMiddleware(thunk))
        jest.clearAllMocks()
    })

    test('getAllStudents',async()=>{
        const studentsList=[
            {id:1,sname:'swapna',course:'java'},
            {id:2,sname:'swathi',course:'spring'},
            {id:3,sname:'amit',course:'react'}
        ]
        api.get.mockResolvedValue({data:studentsList})
        await store.dispatch(getAllStudents())
        const state=store.getState()
        expect(api.get).toHaveBeenCalledTimes(1)
        expect(state.students).toEqual(studentsList)
        expect(state.loading).toBe(false)
        expect(state.error).toBe("")
    })
    test('getAllStudents should not update store students[]',async()=>{
        api.get.mockRejectedValue(new Error("api failed"))
        await store.dispatch(getAllStudents())
        const state=store.getState()
        expect(api.get).toHaveBeenCalledTimes(1)
        expect(state.students).toEqual([])
        expect(state.error).toBe('api failed')
        expect(state.loading).toBe(false)

    })

    test('AddStudent', async()=>{
        const student={
            sname:'sruthi',course:'react'
        }

        const saveStudent={id:4,sname:'anu',course:'spring'}
        api.post.mockResolvedValue({data:saveStudent})
        await store.dispatch(addStudent(student))
        const state=store.getState();

        expect (api.post).toHaveBeenCalledTimes(1)
        expect(api.post).toHaveBeenCalledWith("",student)
        expect(state.students).toEqual([saveStudent])
        expect(state.loading).toBe(false)
        expect(state.error).toBe("")

    })

     test('AddStudent should not add Student ',async()=>{
        api.post.mockRejectedValue(new Error("addStudent api failed"))
        await store.dispatch(addStudent())
        const state=store.getState()
        expect(api.post).toHaveBeenCalledTimes(1)
        expect(state.students).toEqual([])
        expect(state.error).toBe('addStudent api failed')
        expect(state.loading).toBe(false)

    })

    test('getStudentById',async()=>{
        const student={id:4,sname:'swapna',course:'java'}
        api.get.mockResolvedValue({data:student})
        await store.dispatch(getStudentById(4))
        const state=store.getState()

        expect (api.get).toHaveBeenCalledTimes(1)
        expect(api.get).toHaveBeenCalledWith("4")
        expect(state.student).toEqual(student)
        expect(state.loading).toBe(false)
        expect(state.error).toBe("")
    })


    test('getStudentById should not update student',async()=>{
        api.get.mockRejectedValue(new Error("getStudentById api failed"))
        await store.dispatch(getStudentById(4))
        const state=store.getState()
        expect(api.get).toHaveBeenCalledTimes(1)
        expect(state.student).toEqual(null)
        expect(state.error).toBe('getStudentById api failed')
        expect(state.loading).toBe(false)

    })
})