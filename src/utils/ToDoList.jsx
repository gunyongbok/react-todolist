import { BsTrash } from 'react-icons/bs';
import styles from '../css/ToDoList.module.css';

function ToDoList({ item, onUpdate, onDelete }) {
    const { status, text } = item;
    const handleDelete = () => {
        onDelete(item);
    };
    return (
        <>
            <li>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">{text}</label>
                <button onClick={handleDelete}>
                    <BsTrash />
                </button>
            </li>
        </>
    );
}
export default ToDoList;
