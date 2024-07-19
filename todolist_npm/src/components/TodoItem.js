import React, { Component } from 'react';
import './TodoItem.css';

export default class TodoItem extends Component {
    render() {
        const { id, title, handleDelete, handleEdit, handleDoneTask, completed } = this.props;

        return (
            <li className="list-group-item d-flex justify-content-between my-2 align-items-center">
                <div className="d-flex align-items-center">
                    <h6 className={`mt-1 mb-0 ${completed ? 'completed-task' : ''}`}>{title}</h6>
                </div>
                <div className="todo-icon ml-auto">
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fas fa-trash" />
                    </span>
                    <input
                        type="checkbox" // Mengubah input menjadi checkbox
                        checked={completed}
                        onChange={() => handleDoneTask(id)}
                    />
                    <span className={`mx-2 ${completed ? 'text-success' : 'text-secondary'}`}>
                        <i className={completed ? 'far fa-check-square' : 'far fa-square'} />
                    </span>
                    <span className="mx-2 text-warning" onClick={handleEdit}>
                        <i className="fas fa-pen" />
                    </span>
                </div>
            </li>
        );
    }
}
