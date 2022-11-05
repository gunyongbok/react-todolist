import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../css/AddToDo.module.css';

function AddToDo({ onAdd }) {
    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        setText('');
        if (text === '') {
            alert('Write Please');
        }
        onAdd({ id: uuidv4(), text, status: 'active' });
    };
    const onChange = (e) => {
        setText(e.target.value);
    };
    return (
        <div className={styles.inputBox}>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    onChange={onChange}
                    value={text}
                    className={styles.toDoInput}
                    placeholder="Add Todo"
                ></input>
                <button className={styles.addBtn}>Add</button>
            </form>
        </div>
    );
}
export default AddToDo;
