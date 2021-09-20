import React, { Component } from 'react'

export default class ChangeDecision extends Component {
    render() {
        let {decision} = this.props;
        return (
            <div class="relative text-gray-700">
                <input class="w-full h-10 pl-3 pr-32 text-base text-gray-900 border rounded-lg focus:shadow-outline" value={decision}/>
                <button class="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-gray-600 rounded-r-lg hover:bg-gray-500 focus:bg-gray-700">
                    Change
                </button>
            </div>
        )
    }
}