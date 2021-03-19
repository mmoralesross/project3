import React from "react";
import { Link } from "react-router-dom";

import Jumbotron from "../components/Jumbotron";
import Appbar from "../components/Navbar/index";
import Wrapper from "../components/Wrapper";
import Reactions from "../components/Reactions";
import Postreactions from "../components/Postreactions";
import Stockdata from "../components/Stockdata";
import Marketstories from "../components/Marketstories";

function Home() {
    
    return (
        <Wrapper>
            <Appbar>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
                <Link to="/profile">Profile</Link>
            </Appbar>
            <Jumbotron />

            <Stockdata />
            <Marketstories />
            <Postreactions />
            <Reactions />

        </Wrapper>
    );
};

export default Home;