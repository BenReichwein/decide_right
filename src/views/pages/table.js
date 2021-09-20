import React, {Component} from 'react'
import { Slider } from '@material-ui/core';
import { connect } from 'react-redux';

import SideBar from '../modals/sidebar'
import ChangeDecision from '../components/change_decision';
import InputOption from '../components/input_option';
import { updateOptions, updateValue, deleteOption, deleteCriteria } from '../../actions/index'

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sIndex: 0,
            sCriteria: '',
        }
    }

    onSelect = (index, criteria) => {
        this.setState({
            sIndex: index, 
            sCriteria: criteria
        })
    }

    handleChange = (event, newValue) => {
        let {sIndex, sCriteria} = this.state
        let newOptions = this.props.table.options
        newOptions[sIndex][sCriteria] = newValue
        this.props.updateValue(newOptions)
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
        let {sCriteria, sIndex} = this.state
        let {options, criteria, decision} = this.props.table;
        console.log(this.props.table)
        return (
            <div>
                <SideBar/>
                <div style={{marginLeft:"65px"}}>
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <ChangeDecision decision={decision}/>
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
                                        {criteria.map((value, index) => (
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                <button className="text-red-500"
                                                    onClick={()=>this.props.deleteCriteria(criteria, index)}
                                                >
                                                    <i class="fas fa-trash"></i>
                                                </button>
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
                                                    <button className="text-red-500"
                                                    onClick={()=>this.props.deleteOption(options, index)}
                                                    >
                                                        <i class="fas fa-trash"></i>
                                                    </button>
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
                                                                className={`bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 focus:bg-green-800 w-full rounded`}
                                                                onClick={()=>this.onSelect(index,item)}>
                                                                EXCELLENT
                                                                </button>
                                                            } else if (value[item] >= 50 && value[item] <= 74) {
                                                                return <button 
                                                                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 focus:bg-blue-800 w-full rounded`}
                                                                onClick={()=>this.onSelect(index,item)}>
                                                                HIGH
                                                                </button>
                                                            } else if (value[item] >= 25 && value[item] <= 49) {
                                                                return <button 
                                                                className={`bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 focus:bg-yellow-700 w-full rounded`}
                                                                onClick={()=>this.onSelect(index,item)}>
                                                                MEDIUM
                                                                </button>
                                                            } else {
                                                                return <button 
                                                                className={`bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 focus:bg-red-700 w-full rounded`}
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
                                    <InputOption 
                                    updateOptions={this.props.updateOptions}
                                    options={options}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
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
  {updateOptions, updateValue, deleteOption, deleteCriteria}
)(Table);