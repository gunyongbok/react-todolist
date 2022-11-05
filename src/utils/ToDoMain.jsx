import { useState } from 'react';
import styles from '../css/ToDoMain.module.css';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

function ToDoMain() {
    const [toDo, setToDo] = useState([
        { id: '1', text: '123', status: 'active' },
        { id: '2', text: '123', status: 'active' },
    ]);
    const onAdd = (newToDo) => {
        setToDo([...toDo, newToDo]);
    };
    const onUpdate = (updated) => {
        setToDo(toDo.map((t) => (t.id === updated.id ? updated : t)));
    };
    const onDelete = (deleted) => {
        setToDo(toDo.filter((t) => t.id !== deleted.id));
    };
    console.log(toDo);
    return (
        <div className={styles.container}>
            <ul>
                {toDo.map((item) => (
                    <ToDoList
                        key={item.id}
                        item={item}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
            <AddToDo onAdd={onAdd} />
        </div>
    );
}
export default ToDoMain;
