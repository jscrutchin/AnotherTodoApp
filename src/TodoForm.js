import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { Button } from '@material-ui/core';

function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = useInputState('');
    return (
        <Paper style={{ justifyContent: 'center', margin: "1rem 0", padding: '0 1rem' }}>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(value);
                reset();
            }}>
                <TextField
                    value={value}
                    onChange={handleChange}
                    margin='normal'
                    label='Add New Todo'
                    style={{width: '50%'}} />
                <Button style={{marginLeft: '4rem', marginTop: '2rem'}} variant='contained' color='secondary' size='small' type='submit'>
                    Add
                </Button>
            </form>
        </Paper>
    )
}

export default TodoForm;