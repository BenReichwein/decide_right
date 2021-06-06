import React from "react";
import { connect } from 'react-redux';

import { createCriteria } from '../../actions';

class InputCriteria extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    handleClick = () => {
        this.props.toggle();
    };

    handleInputChange = (event) => {
        const { value, id } = event.target;
        this.setState({
            [id]: value
        });
    }

    handleEnterInput = (event) => {
        if (event.key === 'Enter'){
            this.props.toggle()
            this.props.createCriteria(this.state.input)
        }
    }

    createCriteria = () => {
        let {input} = this.state
        let {criteria} = this.props.table
        this.props.createCriteria(criteria, input)
        this.props.toggle()
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
                                <input
                                    id="input"
                                    type="text"
                                    value={this.state.input}
                                    onChange={this.handleInputChange}
                                    onKeyPress={this.handleEnterInput}
                                    required
                                    row="1"
                                    style={{ outline: 'none', resize: 'none', overflow: 'hidden' }}
                                    className="flex-grow text-black w-full border rounded-xl focus:outline-none focus:border-gray-300 border-gray-400 pl-4 py-2"
                                />
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={this.handleClick}
                                    >
                                        Close
                </button>
                                    <button
                                        className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={this.createCriteria}
                                    >
                                        Create Criteria
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
    { createCriteria }
)(InputCriteria);