import React from "react";
import { connect } from 'react-redux';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

import { updateWeight } from '../../actions';

class WeighCriteria extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.table.weight,
        }
    }

    handleClick = () => {
        this.props.toggle();
    };

    updateWeight = () => {
        let {items} = this.state
        this.props.updateWeight(items)
        this.props.toggle()
    }

    SortableItem = SortableElement(({value}) => (
        <li class="border list-none rounded-sm px-3 py-3 font-semibold z-50" style={{borderBottomWidth:0}} tabIndex={0}>{value}</li>
    ))

    SortableList = SortableContainer(({items}) => {
        return (
            <ul class="list-inside text-center p-2">
            {items.map((value, index) => (
                <this.SortableItem key={`item-${value}`} index={index} value={
                    `[${index +1}] - ${value.toUpperCase()}`} />
            ))}
            </ul>
        );
    })

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({items}) => ({
          items: arrayMove(items, oldIndex, newIndex),
        }));
    };

    render() {
        return (
            <div>
                <i onClick={this.handleClick} type="button" className="fa fa-plus-square" style={{ fontSize: '1.75em', padding: '10px', borderRadius: '10px', backgroundColor: 'orange' }} />
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-5">

                                <this.SortableList items={this.state.items} onSortEnd={this.onSortEnd} />

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
                                        onClick={this.updateWeight}
                                    >
                                        Save Weights
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
    {updateWeight}
)(WeighCriteria);