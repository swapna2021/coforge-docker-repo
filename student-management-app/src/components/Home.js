import { Link } from "react-router-dom";

export function Home(){

    return(
       <div className="card card-shadow " >
             <div className="card-body">
                <Link to="/students" className="btn btn-success">View Students</Link>
                <br></br>
                <Link to="/add" className="btn btn-warning">Add Student</Link>
            </div>
        </div>
     
    )
}