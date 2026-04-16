import api from "../api/StudentApi"

export const getAllStudents=()=>{
    return async(dispatch)=>{
        dispatch({type:"Loading"});
       
        try{
        const respone= await api.get("");
        dispatch({
            type:"GetAllStudents",
            payload:respone.data
        });

        }
        catch(error){
        dispatch({
            type:"Error",
            payload:error.message
        })
        }
    }
}
export const getStudentById=(id)=>{
    return async(dispatch)=>{
        dispatch({type:"Loading"})
    try{
        const response=await api.get(`${id}`)
        dispatch({
            type:"GetStudentById",
            payload:response.data
        })
    }
    catch(error){
        dispatch({
            type:"Error",
            payload:error.message
        })
    }
    }
}

export const addStudent=(student)=>{

    return async(dispatch)=>{
        dispatch({type:"Loading"})
    try{
        const response=await api.post("",student)
        console.log(response.data)
        dispatch({
            type:"AddStudent",
            payload:response.data
        })
    }
    catch(error){
        dispatch({
            type:"Error",
            payload:error.message
        })
    }
}

}

