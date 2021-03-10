import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {

    return (
        
        <Wrapper>
            <Navbar />
        <Card>
            <Button color="info">Button 1</Button>
            <Button color="warning">Button 2</Button>
        </Card>
        <Alert
            color="danger"
            titles="Welcome!"
            text1="prolsu"
            text2="have fun!"
        />
        <Alert 
            color="warning"
            titles="Good bye"
            text1="see you later"
            text2="you logged out succesfully!"
        />
        <Alert 
            color="info"
            titles="Good bye"
            text1="see you later"
            text2="you logged out succesfully!"
        />
        
        </Wrapper>
     
    )
};

export default App;