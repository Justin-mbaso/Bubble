import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import login from './mermaid.png'
import swal from 'sweetalert'
import React,{useState} from 'react'
import './floating.css'
import Bubble from './bubble'

const img = {
    float:"right",
    zIndex: "100000"
    
}

function App() {

  const [user, setUser] =useState('')
  const[pass, setPass] = useState('')

  const handleValidate = (e) =>{
    e.preventDefault()
    if (user == 'reactjs2@gmail.com' && pass == 123456)
   swal("Sucessful login", "Welcome ReactJs", "success")
   else
    swal("Wrong Credentials", "Please try agin", "error")
  }


  return (
    <div className="App-header">
     <Bubble />
      <h1>Form Login</h1>
    <div className="row">
    <div className="col-md-6">
      <img className='float-right img' src={login} width="600" style={img}/>
    </div>
    <div className="col-md-6 my-auto p-4 back">
    <form onSubmit={handleValidate}>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" value={user} className="form-control" placeholder='Enter email' onChange={(e)=>setUser(e.target.value)} />
    </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" value={pass} className="form-control" placeholder='Enter password' onChange={(e) => setPass(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
     </div>
    
    </div>
  );
}

export default App;
