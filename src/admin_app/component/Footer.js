function Footer({ options }) {
    return (
        <footer>
            <ul className="row">
                {options.map(option => {
                    return (
                        <li key={option.title}>
                            <span className="font__header">
                                {option.title}
                            </span>
                            <ul>
                                {option.options.map((option1, index) => {
                                    return (
                                        <li key={index} className="font__option footer__option">
                                            {option1}
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </footer>
    )
}

export default Footer;