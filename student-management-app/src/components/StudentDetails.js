import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getStudentById } from "../redux/StudentActions"

export function StudentDetails(){
    const {id}=useParams()
    const dispatch=useDispatch()
    const student=useSelector((state)=>state.student)
    const loading=useSelector((state)=>state.loading)
    const error=useSelector((state)=>state.error)

    useEffect(()=>{
        dispatch(getStudentById(id))
    },[dispatch,id])

    if(loading){
        return <h3>Loading....</h3>
    }
    if(error){
        return <h3>{error}</h3>
    }
    if(!student){
        return <h3>No student with this id {id}</h3>
    }
    
    return(
        <div>
            <h1>Student Details</h1>
            <p>Id:{student.id}</p>
            <p>Name:{student.sname}</p>
            <p>Course:{student.course}</p>
            <Link to="/students" className="btn btn-primary">Back</Link>
        </div>
    )
}