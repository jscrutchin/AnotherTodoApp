import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { Fragment } from "react";

import Todo from './Todo';

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    if (todos.length) return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
                    <Fragment key={todo.id}>
                        <Todo
                            {...todo}
                            toggleTodo={toggleTodo}
                            removeTodo={removeTodo}
                            editTodo={editTodo}
                             />
                        {i < todos.length - 1 ? <Divider /> : ''}
                    </Fragment>
                    
                ))}
            </List>
        </Paper>
    )
    return null;
}

export default TodoList;