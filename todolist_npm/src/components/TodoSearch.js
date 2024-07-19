import React, { Component } from 'react';

class TodoSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
    };

    handleSearch = () => {
        // Panggil prop handleSearch dan kirimkan nilai searchTerm
        this.props.handleSearch(this.state.searchTerm);
    };

    handleAddNewTask = () => {
        // Panggil prop untuk menambahkan tugas baru
        this.props.handleAddNewTask();
    };

    render() {
        return (
            <div className="form-group">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                    />
                    <div className="input-group mt-2">
                        <button className="btn btn-info" type="button" onClick={this.handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
                <div className="input-group-append ">
                    <div className="input-group-prepend">
                        <button className="btn btn-info" type="button" onClick={this.handleAddNewTask}>
                            Add New Task
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoSearch;
