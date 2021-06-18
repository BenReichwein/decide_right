import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    handleInputChange = (event) => {
        const { value, id } = event.target;
        this.setState({
            [id]: value
        });
    }

    createTable = () => {
        if (this.state.input === "") {
            alert("Input a username first")
        } else {
            window.location.href=`/table/${this.state.input}`
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1 className="text-center font-bold text-8xl text-purple-800">Decision Right</h1>
                </div>
                <div class="mt-10">
                    <input
                        id="input"
                        type="text"
                        placeholder="Enter your username"
                        value={this.state.input}
                        onChange={this.handleInputChange}
                        required
                        style={{ outline: 'none', resize: 'none', overflow: 'hidden' }}
                        className="flex-grow text-black w-full border rounded-xl focus:outline-none focus:border-gray-300 border-gray-400 pl-4 py-2"
                    />
                </div>
                <div class="mt-5">
                    <button class="bg-gray-500 text-gray-100 p-4 w-full rounded-xl tracking-wide
                    font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-gray-600
                    shadow-lg"
                    type="button"
                    onClick={this.createTable}
                    >
                        <i className="fas fa-plus-square"/> Create New Decision Table
                    </button>
                </div>
            </div>
        )
    }
}