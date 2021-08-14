import { useState } from 'react';

// eslint-disable-next-line
export default initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const reset = () => {
        setValue('');
    }
    return [value, handleChange, reset]
}