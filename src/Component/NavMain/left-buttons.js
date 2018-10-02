import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class LeftButtons extends Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: false,
        }
    }

    handleClick = () => {
       this.setState({
           redirect: true,
       })
    }

    render() {
        if(this.state.redirect){
            return <Redirect push to='/CardManagement'/>
        }
        return(
            <g>
                <g id="LeftControl" transform="translate(-1469)">
                <g id="Mask_Group_17-2" data-name="Mask Group 17" className="cls-18" transform="translate(1548.297 65.55)" >
                    <g id="Rectangle_34-2" data-name="Rectangle 34" className="cls-1" transform="translate(0 -8)">
                    <rect className="cls-21" width="1212.815" height="121" rx="22"/>
                    <rect className="cls-22" x="0.5" y="0.5" width="1211.815" height="120" rx="21.5"/>
                    </g>
                </g>
                
                {/*Buy Visa Card  Button*/}
                <g id="Mask_Group_19-2" data-name="Mask Group 19" className="cls-18" transform="translate(1548.297 259.55)" onClick={this.handleClick}>
                    <g id="Rectangle_38-2" data-name="Rectangle 38" className="cls-1" transform="translate(0 -8)" >
                    <rect className="cls-21" width="1212.815" height="121" rx="22"/>
                    <rect className="cls-22" x="0.5" y="0.5" width="1211.815" height="120" rx="21.5"/>
                    </g>
                </g>
                    
                <g id="Mask_Group_18-2" data-name="Mask Group 18" className="cls-18" transform="translate(1548.297 452.55)" >
                    <g id="Rectangle_36-2" data-name="Rectangle 36" className="cls-1" transform="translate(0 -8)">
                    <rect className="cls-21" width="1212.815" height="121" rx="22"/>
                    <rect className="cls-22" x="0.5" y="0.5" width="1211.815" height="120" rx="21.5"/>
                    </g>
                </g>
                
                </g>

                <text id="Buy_a_Visa_gift_Card" data-name="Buy a Visa gift Card" className="cls-19" transform="translate(87 318)">
                    <tspan x="0" y="0">Buy a Visa gift Card</tspan>
                </text>

                <text id="Withdraw_Cash" data-name="Withdraw  Cash" className="cls-19" transform="translate(115 124)"><tspan x="0" y="0" xmlSpace="preserve">Withdraw  Cash</tspan></text>
                <text id="Pay_a_Bill" data-name="Pay a Bill" className="cls-19" transform="translate(163 510)"><tspan x="0" y="0">Pay a Bill</tspan></text>
            </g>
        )
    }
}

export default LeftButtons