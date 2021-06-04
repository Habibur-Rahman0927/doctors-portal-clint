import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appoinment from './Components/Appoinment/Appoinment/Appoinment';
import { createContext, useState } from 'react';
import LogIn from './Components/LogIn/LogIn/LogIn';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddDoctor from './Components/AddDoctor/AddDoctor';
// import PrivateRoute from './Components/LogIn/PrivateRoute/PrivateRoute'
import PrivateRoute from './Components/LogIn/PrivateRoute/PrivateRoute';
import AllPatients from './Components/AllPatients/AllPatients';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/getAppointment">
            <Appoinment></Appoinment>
          </Route>
          <Route path="/doctor/addDoctors">
            <AddDoctor></AddDoctor>
          </Route>
          <Route path="/doctor/appointment">
            <Appoinment></Appoinment>
          </Route>
          <Route path="/doctor/patients">
            <AllPatients></AllPatients>
          </Route>
          <Route path="/doctor/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>


  );
}

export default App;
