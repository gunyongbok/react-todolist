function Header({ filter, filters, changeFilter }) {
    return (
        <header>
            <ul>
                {filters.map((a, i) => (
                    <li key={i}>
                        <button onClick={() => changeFilter(a)}>{a}</button>
                    </li>
                ))}
            </ul>
        </header>
    );
}
export default Header;
