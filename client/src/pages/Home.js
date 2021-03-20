import React from "react";
import { Link } from "react-router-dom";

import API from "../utils/API";
import Appbar from "../components/Navbar/index";
import Wrapper from "../components/Wrapper";
import Reactions from "../components/Reactions";
import Marketstories from "../components/Marketstories";

function Home() {

    function handleLogOut() {
        API.userLogout()
            .then(() => window.location.replace("/login"))
            .catch(err => console.log(err));
    };

    return (
        <Wrapper>
            <Appbar>
                <Link to="/profile">Profile</Link>
                <Link style={{ float: "right" }} onClick={handleLogOut}>Log Out</Link>
            </Appbar>
            <Wrapper>
                <Marketstories />
            </Wrapper>
            <Reactions />

        </Wrapper>
    );
};

export default Home;