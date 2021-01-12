
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from "./components/Signup"
import Dashboard_copy from './pages/DashboardNew';
import checkD from "./components/checkD"
import ForgotPassword from "./components/ForgotPassword"
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from "./components/PrivateRoute"
import UpdateProfile from "./components/UpdateProfile"
import Error from './pages/Error';
import NewForms from './components/NewForms';


function App() {
  return (
    <>
     <div className="App">
       <Router>
         <AuthProvider>
         <Switch>
           
           <PrivateRoute exact path = "/" component={checkD}/>
           <PrivateRoute exact path = "/admin-home" component={Dashboard_copy}/>
           <PrivateRoute exact path="/update-profile" component={UpdateProfile}/>
           <Route exact path="/login" component={Login}/>
           <Route exact path="/signup" component={Signup} />
           <Route exact path="/forgot-password" component={ForgotPassword} />
           <Route exact path="/testing" component={NewForms} />
           
           <Route component={Error}/>
         
         </Switch>
         </AuthProvider>


       </Router>




     </div>
    </>
    
  );
}

export default App;
