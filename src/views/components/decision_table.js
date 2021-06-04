import React, {Component} from 'react'
import { Slider } from '@material-ui/core';

export default class DecisionTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decision: "What should i eat today",
            criteria: [
                "price",
                "taste"
            ],
            options: [{
                option: "Hot dog",
                price: 40,
                taste: 10
            }, {
                option: "Pizza",
                price: 69,
                taste: 20
            }],
            sIndex: 0,
            sCriteria: '',
            newInput: ''
        }
    }

    inputOption = (e) => {
        e.preventDefault();
        let {options, newInput} = this.state
        let newOption = {
            ...options[options.length -1],
            option: newInput
        }
        this.setState( { 
            options: [...options, newOption],
            newInput: ''
        })
    }

    onSelect = (index, criteria) => {
        this.setState({
            sIndex: index, 
            sCriteria: criteria
        })
        console.log(this.state.options)
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleChange = (event, newValue) => {
        let {sIndex, sCriteria} = this.state
        let newOptions = this.state.options
        newOptions[sIndex][sCriteria] = newValue
        this.setState({
            options: newOptions
        })
      };
    

    componentDidMount = () => {
        this.setState(this.props.data)
    }
    
    render() {
        const marks = [
            {
              value: 0,
              label: 'Low',
            },
            {
              value: 25,
              label: 'Medium',
            },
            {
              value: 50,
              label: 'High',
            },
            {
              value: 75,
              label: 'Excellent',
            },
          ];
        let {options, decision, criteria, sCriteria, sIndex} = this.state
        return (
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <div class="relative text-gray-700">
                                <input class="w-full h-10 pl-3 pr-32 text-base text-gray-900 border rounded-lg focus:shadow-outline" value={decision}/>
                                <button class="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-gray-600 rounded-r-lg hover:bg-gray-500 focus:bg-gray-700">
                                    Change
                                </button>
                            </div>
                            <Slider
                            className="ml-5"
                            defaultValue={20}
                            value={sCriteria !== '' ? options[sIndex][sCriteria] : 20}
                            aria-labelledby="discrete-slider-always"
                            step={5}
                            onChange={this.handleChange}
                            marks={marks}
                            />
                            <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Options
                                    </th>
                                {criteria.map((value) => (
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        {value}
                                    </th>
                                ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {options.map((value, index) => (
                                <tr key={value.option}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{value.option}</div>
                                            </div>
                                        </div>
                                    </td>
                                    {criteria.map((item) => (
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                {(()=> {
                                                    if (value[item] >= 75) {
                                                        return <button 
                                                        className={`bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 focus:bg-green-800 rounded`}
                                                        onClick={()=>this.onSelect(index,item)}>
                                                        EXCELLENT
                                                        </button>
                                                    } else if (value[item] >= 50 && value[item] <= 74) {
                                                        return <button 
                                                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 focus:bg-blue-800 rounded`}
                                                        onClick={()=>this.onSelect(index,item)}>
                                                        HIGH
                                                        </button>
                                                    } else if (value[item] >= 25 && value[item] <= 49) {
                                                        return <button 
                                                        className={`bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 focus:bg-yellow-700 rounded`}
                                                        onClick={()=>this.onSelect(index,item)}>
                                                        MEDIUM
                                                        </button>
                                                    } else {
                                                        return <button 
                                                        className={`bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 focus:bg-red-700 rounded`}
                                                        onClick={()=>this.onSelect(index,item)}>
                                                        LOW
                                                        </button>
                                                    }
                                                })()}
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                                ))}
                            </tbody>
                            </table>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}