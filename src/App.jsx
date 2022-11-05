import ToDoMain from './utils/ToDoMain';
import style from './css/App.module.css';
import Header from './utils/Header';
import { useState } from 'react';

const filters = ['all', 'completed', 'active'];

function App() {
    const [filter, setFilter] = useState(filters[0]);
    const changeFilter = (chosenFilter) => {
        setFilter(chosenFilter);
    };
    return (
        <>
            <Header
                filter={filter}
                filters={filters}
                changeFilter={changeFilter}
            />
            <ToDoMain filter={filter} />
        </>
    );
}

export default App;
