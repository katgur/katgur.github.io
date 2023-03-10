import { useState } from "react"
import TagList from "./TagList"

const arrowDown = <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.93145 0.443339C5.09721 0.443339 5.25619 0.509187 5.3734 0.626397C5.49061 0.743607 5.55645 0.902579 5.55645 1.06834L5.55645 8.30959L8.23895 5.62584C8.29706 5.56773 8.36605 5.52163 8.44197 5.49018C8.5179 5.45874 8.59927 5.44255 8.68145 5.44255C8.76363 5.44255 8.84501 5.45874 8.92093 5.49018C8.99686 5.52163 9.06584 5.56773 9.12395 5.62584C9.18206 5.68395 9.22816 5.75294 9.25961 5.82886C9.29106 5.90478 9.30724 5.98616 9.30724 6.06834C9.30724 6.15052 9.29106 6.23189 9.25961 6.30782C9.22816 6.38374 9.18206 6.45273 9.12395 6.51084L5.37395 10.2608C5.3159 10.319 5.24693 10.3652 5.171 10.3967C5.09506 10.4282 5.01366 10.4445 4.93145 10.4445C4.84924 10.4445 4.76784 10.4282 4.69191 10.3967C4.61598 10.3652 4.54701 10.319 4.48895 10.2608L0.738954 6.51084C0.621595 6.39348 0.555664 6.23431 0.555664 6.06834C0.555664 5.90237 0.621595 5.7432 0.738953 5.62584C0.856312 5.50848 1.01548 5.44255 1.18145 5.44255C1.34742 5.44255 1.5066 5.50848 1.62395 5.62584L4.30645 8.30959L4.30645 1.06834C4.30645 0.902579 4.3723 0.743607 4.48951 0.626397C4.60672 0.509187 4.76569 0.443339 4.93145 0.443339Z" fill="#333333"/>
                  </svg>



function TagSelect({ defaultValue, register }) {

    const names = ['violet', 'green', 'red', 'orange', 'light-blue', 'lime', 'blue', 'yellow']
    const colors = {
        'violet': '#EEE1FD', 
        'green': '#BAF8CF',
        'red': '#FED6CC',
        'orange': '#FFDCB6',
        'light-blue': '#B8E6FF',
        'lime': '#D8FCB0',
        'blue': '#C6D9FF',
        'yellow': '#FFF4C7'
    }

    const [selected, setSelected] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);

    const onHeaderClick = () => {
        setIsOpen(!isOpen);
    }

    const isChecked = (name) => {
        return defaultValue?.includes(name);
    };
    const onClick = (event) => {
        if (event.target.checked) {
            setSelected([...selected, event.target.name]);
        } else {
            const newSelected = selected.filter((value, index, array) => {
                return value !== event.target.name;
            });
            setSelected(newSelected);
        }
    }

    return (
        <div className="tag-select">
            {selected && <TagList tags={selected} />}
            <div className="tag-select__header" onClick={onHeaderClick}>
                <div>?????????????? ??????</div>
                {arrowDown}
            </div>
            {isOpen && <ul className="tag-select__options">
                {names.map(name => {
                    const defaultValue = isChecked(name);
                    return (<li className="tag-select__option">
                                <div style={{backgroundColor: colors[name], width: 100, height: 18, borderRadius: 2}} />
                                <input className="checkbox" onClick={(ev) => {onClick(ev)}} type="checkbox" defaultChecked={defaultValue} {...register(name)}></input>
                            </li>)
                })}
            </ul>}
        </div>
    )
}

export default TagSelect;