import { useState } from 'react';
import styles from '../css/ToDoMain.module.css';
import AddToDo from './AddToDo';

function ToDoMain() {
    const [toDo, setToDo] = useState([
        { id: '1', text: '123', status: 'active' },
        { id: '2', text: '123', status: 'active' },
    ]);
    const onAdd = (newToDo) => {
        setToDo([...toDo, newToDo]);
    };
    console.log(toDo);
    return (
        <div className={styles.container}>
            <ul>
                {toDo.map((toDo) => (
                    <li key={toDo.id}>{toDo.text}</li>
                ))}
            </ul>
            <AddToDo onAdd={onAdd} />
        </div>
    );
}
export default ToDoMain;
