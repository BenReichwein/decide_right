import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="text-center font-bold text-8xl text-purple-800">Decision Right</h1>
                </div>
                <div class="mt-10">
                    <button class="bg-gray-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                    font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-gray-600
                    shadow-lg"
                    type="button"
                    onClick={()=> window.location.href="/table/benny"}
                    >
                        <i className="fas fa-plus-square"/> Create New Decision Table
                    </button>
                </div>
                <div class="mt-10">
                    <button class="bg-gray-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                    font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-gray-600
                    shadow-lg"
                    type="button"
                    >
                        <i className="fas fa-folder"/> Open an Existing Decision Table
                    </button>
                </div>
            </div>
        )
    }
}