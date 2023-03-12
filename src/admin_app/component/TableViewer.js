import TableItem from './TableItem'
import { useEffect, useState } from 'react'

const chevronRight = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
)

const chevronLeft = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
)

function TableViewer({ header, columns, items }) {
    const [page, setPage] = useState(0);

    const capacity = 5;
    const itemsCount = items.length;
    const pageCount = Math.floor(itemsCount / capacity) + (itemsCount % capacity !== 0);
    const pages = [];
    for (let i = 0; i < pageCount; i++) {
        if (page < pageCount - 3) {
            if (i >= page && i < page + 3 || i === pageCount - 1) {
                pages.push(i + 1);
            } else if (i === page + 3) {
                pages.push("...");
            }
        } else {
            if (i > pageCount - 4 || i === 0) {
                pages.push(i + 1);
            } else if (i === pageCount - 4) {
                pages.push("...");
            }
        }
    }

    const showingItems = items.slice(capacity * page, Math.min(capacity * page + capacity, itemsCount));
    
    return (
        items &&
        <div className="list card">
            <span className="list__header font__header list__item justify__space-between">
                {header}
            </span>
            <ul className="list__body">
                {showingItems.map((item, index) => {
                    return <TableItem columns={columns} item={item} />
                })}
            </ul>
            <div className="list__footer list__item font__subtext2">
                {`${showingItems.length} из ${itemsCount}`}
                <div className="right">
                    {page !== 0 && 
                    <span onClick={() => setPage(page - 1)}>
                        {chevronLeft}
                    </span>}
                    {pages.map((page1) => {
                        let style = (page === (page1 - 1)) ? "font-page__selected" : "font-page";
                        return (
                            <span key={page1} className={style} onClick={() =>  {
                                if (page1 !== "...") {
                                    setPage(page1 - 1);
                                }
                            }}>
                                {page1}
                            </span>
                        )
                    })}
                    {page + 1 !== pageCount && 
                    <span onClick={() => setPage(page + 1)}>
                        {chevronRight}
                    </span>
                    }
                </div>
            </div>
        </div>
    )
}

export default TableViewer;