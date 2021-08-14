import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import useToggle from "./hooks/useToggle";
import EditTodoForm from "./EditTodoForm";

function Todo({ task, completed, removeTodo, toggleTodo, editTodo, id }) {
    const [isEditing, toggle] = useToggle();
    return (
        <ListItem style={{height: "64px"}}>
            {isEditing ? <EditTodoForm editTodo={editTodo} id={id}  task={task} toggleEdit={toggle}/> :
                <>
                    <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
                    <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label='Edit' onClick={toggle}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    )
}
export default Todo;