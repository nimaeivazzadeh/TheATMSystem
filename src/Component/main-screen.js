import React, { Component } from 'react'

import './Assets/main-screen.css'

class MainScreen extends Component {

    render() {
        return(
            <div className="main-screen">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                <h3 className="h3">Please Enter your Pin Code</h3>
                    <br/>
                <input className="input" type="password" />
            </div>
        )
    }
}

export default MainScreen