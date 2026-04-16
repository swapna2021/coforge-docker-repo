import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllStudents } from "../redux/StudentActions"
import { Link } from "react-router-dom"

export function StudentList(){
    const dispatch=useDispatch()
    const students=useSelector((state)=>state.students)
    const loading=useSelector((state)=>state.loading)
    const error=useSelector((state)=>state.error)

    useEffect(()=>{
        dispatch(getAllStudents())
    },[dispatch])

    if(loading){
        return <h3>loading....</h3>
    }
    if(error){
        return <h3>{error}</h3>
    }

    return(
        <div>
            <h1>Student List</h1>

            {students.length===0?<h3>No students </h3>:
            (
                <table className="table table-striped ">
                    <tr>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Action</th>
                    </tr>
                    {students.map((s)=>

                    
                        <tr key={s.id}>
                            
                        
                            <td>{s.sname}</td>
                            <td>{s.course}</td>
                            <td><Link to={`/students/${s.id}`} className="btn btn-success">Info</Link></td>
                          
                        </tr>
                    )}
               
                </table>
            )
            }
            <Link to="/" className="btn btn-primary">Home</Link>
        </div>
    )
}