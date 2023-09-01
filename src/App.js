import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}
  from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import DailyAttendance from './Components/DailyAttendance/DailyAttendance';
import MonthlySheet from './Components/MonthlyRTOUpdates/MonthlySheet';
import Admin from './Components/Admin/Admin';
import Report from './Components/Report/Report';

function App() {
  const logout = () => {
    window.location.href = '/';
    sessionStorage.clear()
  }
  return (
    <div className="App">
      <div className='navBar'>

        {sessionStorage.getItem("isLoggedin") ? (

          <div className='details'>
            <span>Welcome {sessionStorage.getItem("associateName")}</span>
            <span>Id: {sessionStorage.getItem("associateId")}</span>

          </div>
        )
          :
          (
            <div>
              <span style={{ visibility: "hidden" }}>Genc Attendance</span>

            </div>
          )}
          
        <span>Genc Attendance</span>
        {sessionStorage.getItem("isLoggedin") ? (

        <button onClick={logout} className='logoutbtn' style={{height: "50%",marginTop: "3vh", width: "10%"}}>Logout</button>
        ):
        (
          <div>
          <span style={{ visibility: "hidden" }}>Genc Attendance</span>

        </div>
        )}
      </div>
      <Router>
        {sessionStorage.getItem("isLoggedin") ? (
          <div className='authoriseduser'>
              <Routes>
              <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/DailyAttendance' element={<DailyAttendance />}></Route>
                <Route exact path='/RTOUpdates' element={<MonthlySheet />}></Route>
                <Route exact path='/admin' element={<Admin />}></Route>
                <Route exact path='/report' element={<Report />}></Route>

              </Routes>
          </div>
        )
          :
          (
            <div className='login'>
              <Routes>
                <Route exact path='/' element={<Login />}></Route>
              </Routes>
            </div>
          )
        }

      </Router>
    </div>
  );
}

export default App;
