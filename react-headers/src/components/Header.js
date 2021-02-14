function Header(params) {
    const {links} = params
    let arr = []
    links.forEach(({id, title, link}) => {
        arr.push(
            <a href={link} id={id} className="header__link">{title}</a>
        )
    });
    return <>
        <header className="header">
            <span>Oğuzhan AYDIN</span>
            <nav className="header__navbar">
                {arr}
            </nav>
        </header>
    </>
}

export default Header