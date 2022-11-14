import ToDoMain from './utils/ToDoMain';
import styles from './css/App.module.css';
import Header from './utils/Header';
import { useState } from 'react';
import { LightModeProvider } from './context/LightModeContext';

const filters = ['all', 'completed', 'active'];

function App() {
    const [filter, setFilter] = useState(filters[0]);
    const changeFilter = (chosenFilter) => {
        setFilter(chosenFilter);
    };
    return (
        <LightModeProvider>
            <div className={styles.root}>
                <Header filter={filter} filters={filters} changeFilter={changeFilter} />
                <ToDoMain filter={filter} />
            </div>
        </LightModeProvider>
    );
}

export default App;
