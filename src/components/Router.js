import React from "react";
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../routes/Home";
import EditProfile from "../routes/EditProfile";
import Profile from "../routes/Profile";
import Auth from "../routes/Auth";

const AppRouter = (isLoggedIn) => {

    return (
        <Router>
            <Routes>
                {isLoggedIn['isLoggedIn']
                ?<> 
                <Route exact path="/" element={<Home />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/profile" element={<Profile />} />
                </> 
                :<Route path="/" element={<Auth />} />
                }
            </Routes>
        </Router>
    );
}

export default AppRouter;
