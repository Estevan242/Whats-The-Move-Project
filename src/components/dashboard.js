import CalendarPage from "../pages/CalendarPage/CalendarPage";
import Friends from "../pages/friends";
import Events from "../pages/Events/Events";
import {auth} from "../utils/firebase";
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from "../pages/Login/login";


import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './dashboard.css';

export default function Dashboard(){

    const [user, loading] = useAuthState(auth);

    return(
        <div className="dashboard">
            <div className="header">
                <h2>Dashboard component: You have signed in {user.displayName}</h2>
            </div>
            <BrowserRouter>
                <nav className="navbar">
                    <Link to="/CalendarPage" className="nav-link"><button className="nav-button">CalendarPage</button></Link>
                    <Link to="/Friends" className="nav-link"><button className="nav-button"> Friends</button></Link>
                    <Link to="/Events" className="nav-link"><button className="nav-button">Events</button></Link>
                </nav>
                <Routes>
                    <Route path="/CalendarPage" element={<CalendarPage />} />
                    <Route path="/Friends" element={<Friends/>} />
                    <Route path="/Events" element={<Events/>} />
                </Routes>  
            </BrowserRouter>
        </div>
    );
}
