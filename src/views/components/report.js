import React from "react";
import { connect } from 'react-redux';

import { generateReport } from '../../actions';

class Report extends React.Component {

    handleClick = () => {
        this.props.toggle();
    };

    componentDidMount = () => {
        this.props.generateReport(this.props.table)
    }

    render() {
        return (
            <div>
                <i onClick={this.handleClick} type="button" className="fa fa-plus-square" style={{ fontSize: '1.75em', padding: '10px', borderRadius: '10px', backgroundColor: 'orange' }} />
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-5">

                                <h1>
                                    Test
                                </h1>

                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={this.handleClick}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        table: state.table,
    }
}

export default connect(
    mapStateToProps,
    {generateReport}
)(Report);