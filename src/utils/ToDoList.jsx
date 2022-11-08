import { BsTrash } from 'react-icons/bs';
import styles from '../css/ToDoList.module.css';

function ToDoList({ item, onUpdate, onDelete }) {
    const { status, text } = item;
    const handleDelete = () => {
        onDelete(item);
    };
    const handleStatus = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({ ...item, status });
    };
    return (
        <>
            <li className={styles.toDoList}>
                <input
                    type="checkbox"
                    id="checkbox"
                    checked={status === 'completed'}
                    onChange={handleStatus}
                />
                <label className={styles.label} htmlFor="checkbox">
                    {text}
                </label>
                <button className={styles.trashBtn} onClick={handleDelete}>
                    <BsTrash />
                </button>
            </li>
        </>
    );
}
export default ToDoList;
