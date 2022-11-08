import styles from '../css/Header.module.css';

function Header({ filter, filters, changeFilter }) {
    return (
        <header className={styles.header}>
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
