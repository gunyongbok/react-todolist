import { useLigthMode } from '../context/LightModeContext';
import styles from '../css/Header.module.css';
import { HiMoon, HiSun } from 'react-icons/hi';

function Header({ filter, filters, changeFilter }) {
    const { lightMode, handleLightMode } = useLigthMode();
    return (
        <header className={styles.header}>
            <button onClick={handleLightMode}>
                {!lightMode && <HiMoon />}
                {lightMode && <HiSun />}
            </button>
            <ul className={styles.header_ul}>
                {filters.map((a, i) => (
                    <li className={styles.header_li} key={i}>
                        <button onClick={() => changeFilter(a)}>{a}</button>
                    </li>
                ))}
            </ul>
        </header>
    );
}
export default Header;
