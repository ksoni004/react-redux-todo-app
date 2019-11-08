import React from 'react'
import AddTodo from '../containers/AddTodo'
import Table from '../containers/Table'

const App = () => (
    <div className="App">
        <div className="container" style={{ marginTop: "80px" }} >
            <div className="row">
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    <h2>Todo App</h2>
                    <AddTodo />
                </div>
                <Table />
            </div>
        </div>
    </div>
)

export default App