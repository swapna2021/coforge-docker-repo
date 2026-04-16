import './App.css';

import { ApiRoutes } from './ApiRoutes';

function App() {
  return (
    
     <div className="container-fluid">
            <div className="row bg-primary text-light">
                 <h1> Student Management App</h1>
                 <h2>Adding to Git</h2>
            </div>
      <div className='row'>
        <ApiRoutes/>
      </div>
    </div>
  );
}

export default App;
