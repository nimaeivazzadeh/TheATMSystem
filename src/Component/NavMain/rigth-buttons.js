import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


class RigthButtons extends Component {

    constructor(props) { 
        super(props)
        this.state = {
            redirect : false
        }
    }

    handleClick = () => {
        this.setState( {
            redirect : true
        })
    }

    render() {

        if(this.state.redirect) {
            return <Redirect push to='/ProfileScreen' /> 
        }

        return(
            <g>
                <g id="RightControl">
                <g id="Mask_Group_17" data-name="Mask Group 17" className="cls-18" transform="translate(1548.297 65.55)">
                    <g id="Rectangle_34" data-name="Rectangle 34" className="cls-1" transform="translate(0 -8)">
                    <rect className="cls-21" width="1212.815" height="121" rx="22"/>
                    <rect className="cls-22" x="0.5" y="0.5" width="1211.815" height="120" rx="21.5"/>
                    </g>
                </g>
                  {/* Notify change a personal information */}
                  <g id="Mask_Group_19" data-name="Mask Group 19" className="cls-18" transform="translate(1548.297 259.55)" onClick={this.handleClick}>
                    <g id="Rectangle_38" data-name="Rectangle 38" className="cls-1" transform="translate(0 -8)">
                    <rect className="cls-21" width="1212.815" height="121" rx="22"/>
                    <rect className="cls-22" x="0.5" y="0.5" width="1211.815" height="120" rx="21.5"/>
                    </g>
                </g>
                <g id="Mask_Group_18" data-name="Mask Group 18" className="cls-18" transform="translate(1548.297 452.55)">
                    <g id="Rectangle_36" data-name="Rectangle 36" className="cls-1" transform="translate(0 -8)">
                    <rect className="cls-21" width="1212.815" height="121" rx="22"/>
                    <rect className="cls-22" x="0.5" y="0.5" width="1211.815" height="120" rx="21.5"/>
                    </g>
                </g>
              
                </g>

                <text id="_Notify_of_a_change_of_personal_detail_" data-name=" Notify of a change 
                        of personal detail " className="cls-19" transform="translate(1528 300)"  >
                        <tspan x="20" y="20" xmlSpace="preserve"> Notify change of PI </tspan>
                </text>

                <text id="Cancel_a_direct_debit" data-name="Cancel a direct debit" className="cls-19" transform="translate(1549 510)"><tspan x="0" y="0">Cancel a direct debit</tspan></text>
                <text id="Transfer_cash" data-name="Transfer cash" className="cls-19" transform="translate(1603 127)"><tspan x="0" y="0">Transfer cash</tspan></text>
            </g>
        )
    }
}

export default RigthButtons