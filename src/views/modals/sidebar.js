import React, { Component } from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { connect } from 'react-redux';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import InputCriteria from './input_criteria'
import WeighCriteria from './weigh_criteria'
import Report from './report'

class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expand: false,
            seenInput: false,
            seenCriteria: false,
            seenReport: false
        };
    }

    toggleInput = () => {
        this.setState({seenInput: !this.state.seenInput})
    }

    toggleCriteria = () => {
        this.setState({seenCriteria: !this.state.seenCriteria})
    }

    toggleReport = () => {
        this.setState({seenReport: !this.state.seenReport})
    }

    render() {
        return (
            <React.Fragment>
                {this.state.seenInput? <InputCriteria toggle={this.toggleInput}/> : null}
                {this.state.seenCriteria? <WeighCriteria toggle={this.toggleCriteria}/> : null}
                {this.state.seenReport? <Report toggle={this.toggleReport}/> : null}
                <SideNav
                className="bg-gray-600"
                expanded={this.state.expand}
                onSelect={(selected) => {
                    if (selected === "inputCriteria") {
                        this.setState({
                            expand: false,
                            seenInput: true
                        })
                    } else if (selected === "weighCriteria") {
                        this.setState({
                            expand: false,
                            seenCriteria: true
                        })
                    } else if (selected === "createReport") {
                        this.setState({
                            expand: false,
                            seenReport: true
                        })
                    }
                }}
                onToggle={(expanded) => this.setState({expand: expanded})}
                >
                    <SideNav.Toggle/>
                    <SideNav.Nav defaultSelected="">
                        <NavItem eventKey="inputCriteria">
                            <NavIcon>
                                <i className="fas fa-sliders-h"/>
                            </NavIcon>
                            <NavText>
                                Input Criteria
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="weighCriteria">
                            <NavIcon>
                                <i className="fas fa-balance-scale-right"/>
                            </NavIcon>
                            <NavText>
                                Weigh Criteria
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="createReport">
                            <NavIcon>
                                <i className="fas fa-file-alt"/>
                            </NavIcon>
                            <NavText>
                                Create Report
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </React.Fragment>
        )
    }
}

export default connect(
  null,
  null
)(SideBar);