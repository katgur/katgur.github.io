import { useState } from 'react';
import menuIcon from '../resource/vector/v_menu.svg'
import Modal from './Modal'

function Header({ logo, name, menu, profile, windowSize }) {
    const [coords, setCoords] = useState({});
    const [isEnabled, setEnabled] = useState(false);

    const maximized = (
        <>
            <div className="header-logo">
                {logo && <img src={logo} className="header-logo__pic" alt="logo" />}
                <span className="font__logo">{name}</span>
            </div>
            <ul className="header-menu">
                {menu && 
                    menu.map(option => {
                        return <li key={option.text}>{option.text}</li>
                    })
                }
                <img src={profile.pic} alt="Pic" onClick={(e) => {
                    const rect = e.target.getBoundingClientRect();
                    setCoords({
                      right: 10,
                      top: rect.y + window.scrollY + 60
                    });
                    setEnabled(!isEnabled);
                }}/>
            </ul>
        </>
    )
    const minimized = (
        <>
            <div className="header-logo">
                {logo && <img src={logo} className="header-logo__pic" alt="logo" />}
                <span className="font__logo">{name}</span>
            </div>
            <div className="header-menu">
                <img src={menuIcon} alt="Menu" />
            </div>
        </>
    )
    return (
        <header>
            {(!windowSize || windowSize.width > 768) && maximized}
            {windowSize && windowSize.width <= 768 && minimized}
            <Modal coords={coords} isEnabled={isEnabled}>
                <ul>
                    {profile.menu.map((option, index) => {
                        return (
                            <li key={index} onClick={() => setEnabled(false)}>
                                {option}
                            </li>
                        )
                    })}
                </ul>
            </Modal>
        </header>
    )
}

export default Header;