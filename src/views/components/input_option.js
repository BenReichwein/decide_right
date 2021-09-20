import React, { Component } from 'react'

export default class InputOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newInput: ''
        }
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    inputOption = (e) => {
        e.preventDefault();
        let {newInput} = this.state
        let {options} = this.props;
        this.props.updateOptions(options, newInput)
        this.setState( { 
            newInput: ''
        })
    }
    render() {
        return (
            <div class="relative text-gray-700">
                <input class="w-full h-10 pl-3 pr-32 text-base text-gray-900 border rounded-lg focus:shadow-outline" 
                placeholder="Input Option"
                name="newInput"
                onChange={this.handleInputChange}
                value={this.state.newInput}
                />
                <button class="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-gray-600 rounded-r-lg hover:bg-gray-500 focus:bg-gray-700"
                onClick={this.inputOption}>
                    Add
                </button>
            </div>
        )
    }
}