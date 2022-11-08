import ToDoMain from './utils/ToDoMain';
import styles from './css/App.module.css';
import Header from './utils/Header';
import { useState } from 'react';

const filters = ['all', 'completed', 'active'];

function App() {
    const [filter, setFilter] = useState(filters[0]);
    const changeFilter = (chosenFilter) => {
        setFilter(chosenFilter);
    };
    return (
        <div className={styles.root}>
            <Header
                filter={filter}
                filters={filters}
                changeFilter={changeFilter}
            />
            <ToDoMain filter={filter} />
        </div>
    );
}

export default App;
