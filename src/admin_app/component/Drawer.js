function Drawer({ options, windowSize }) {
    const minimized = (
        <ul className="drawer__minimized column">
            {options.links}
            {/* {options.map(option => {
                    return (
                        <>
                            {option.links.map(link => {
                                return (
                                    <li key={option1.text}>
                                        <img src={option1.icon} alt="icon" className="drawer-content__option-icon" />
                                    </li>
                                )
                            })}
                        </>
                    )
                })} */}
        </ul>
    )
    const maximized = (
        <div className="drawer">
            <ul className="drawer-content">
                {options.map(option => {
                    return (
                        <li key={option.title} className="drawer-content__section">
                            <span className="drawer-content__header font__header">
                                {option.title}
                            </span>
                            <ul>
                                {option.links.map((link, index) => {
                                    return (
                                        <li key={index} className="drawer-content__option font__option">
                                            {link}
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
    return (
        <>
            {windowSize && windowSize.width <= 768 && minimized}
            {(!windowSize || windowSize.width > 768) && maximized}
        </>
    )
}

export default Drawer;