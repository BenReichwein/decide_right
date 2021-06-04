import React, { Component } from 'react'
import { connect } from 'react-redux';

import SideBar from '../components/sidebar'
import DecisionTable from '../components/decision_table'

class Table extends Component {

    render() {
        console.log(this.props.table)
        let {table} = this.props
        return (
            <div>
                <SideBar/>
                <div style={{marginLeft:"65px"}}>
                    <DecisionTable />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        table: state.table,
    }
}

export default connect(
  mapStateToProps,
  null
)(Table);