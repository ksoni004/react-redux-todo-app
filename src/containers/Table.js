import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo, setVisibilityFilter } from "../actions";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../actions/constants";
import { bindActionCreators } from "redux";

class Table extends Component {
    render() {
        return (
            <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <nav>
                    <ol className="breadcrumb" style={{ cursor: "pointer" }}>
                        <li
                            className={"breadcrumb-item " + (this.props.visibilityFilter === SHOW_ALL ? 'active' : '')}
                            onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}
                        >
                            All
                        </li>
                        <li
                            className={"breadcrumb-item " + (this.props.visibilityFilter === SHOW_COMPLETED ? 'active' : '')}
                            onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}
                        >
                            Completed
                        </li>
                        <li
                            className={"breadcrumb-item " + (this.props.visibilityFilter === SHOW_ACTIVE ? 'active' : '')}
                            onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}
                        >
                            Active
                        </li>
                    </ol>
                </nav>
                {this.props.todos.length !== 0 ? (
                    <table
                        className="table table-hover table-bordered table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Todos</th>
                                <th scope="col">Status</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.todos.map(todo => (
                                <tr key={todo.id}>
                                    <td
                                        style={{
                                            textDecoration: todo.completed ? "line-through" : "none",
                                            color: todo.completed ? "green" : "white",
                                            width: "60%"
                                        }}
                                    >
                                        {todo.text}
                                    </td>
                                    <td
                                        style={{
                                            width: "25%"
                                        }}
                                    >
                                        {todo.completed === true ? "Completed" : "Active"}
                                    </td>
                                    <td
                                        style={{
                                            width: "15%"
                                        }}
                                    >
                                        <span
                                            className="fas fa-trash"
                                            title="Delete Todo"
                                            onClick={() => this.props.deleteTodo(todo.id)}
                                            style={{
                                                color: "white",
                                                fontSize: "20pt",
                                                marginRight: "20px",
                                                cursor: "pointer"
                                            }}
                                        />
                                        <span
                                            className="fas fa-check-circle"
                                            title="Mark as Completed"
                                            onClick={() => this.props.toggleTodo(todo.id)}
                                            style={{ 
                                                color: "white", 
                                                fontSize: "20pt", 
                                                cursor: "pointer" 
                                            }}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                        <div
                            className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                            <div className="alert alert-danger" role="alert">
                                No results found
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

const filterTodos = (todos, filter) => {
    switch (filter) {
        case SHOW_ALL:
            return todos;
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error("Unknown filter: " + filter);
    }
};

const mapStateToProps = state => {
    return {
        todos: filterTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            deleteTodo,
            toggleTodo,
            setVisibilityFilter
        },
        dispatch
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Table)
