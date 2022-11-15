import { useEffect, useState } from 'react';
import styles from '../css/ToDoMain.module.css';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

function ToDoMain({ filter }) {
    const [toDo, setToDo] = useState(getTodosFromLocalStorage);
    const onAdd = (newToDo) => {
        setToDo([...toDo, newToDo]);
    };
    const onUpdate = (updated) => {
        setToDo(toDo.map((t) => (t.id === updated.id ? updated : t)));
    };
    const onDelete = (deleted) => {
        setToDo(toDo.filter((t) => t.id !== deleted.id));
    };
    const filteredToDo = showFilteredList(toDo, filter);
    console.log(toDo);

    useEffect(() => {
        localStorage.setItem('toDo', JSON.stringify(toDo));
    }, [toDo]);

    return (
        <div className={styles.container}>
            <ul className={styles.toDoMain_ul}>
                {filteredToDo.map((item) => (
                    <ToDoList key={item.id} item={item} onUpdate={onUpdate} onDelete={onDelete} />
                ))}
            </ul>
            <AddToDo onAdd={onAdd} />
        </div>
    );
}
export default ToDoMain;

function showFilteredList(toDo, filter) {
    if (filter === 'all') {
        return toDo;
    }
    return toDo.filter((t) => t.status === filter);
}

const getTodosFromLocalStorage = () => {
    const toDos = localStorage.getItem('toDo');
    return toDos ? JSON.parse(toDos) : [];
};
