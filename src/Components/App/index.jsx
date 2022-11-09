import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import Articles from "../Articles";

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <Header/>
            <Articles/>
            <Footer/>
            </>
        )
    }
}
export default App;