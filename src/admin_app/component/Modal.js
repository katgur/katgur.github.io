import { createPortal } from 'react-dom'

function Modal({ children, coords, isEnabled }) {
    const container = document.getElementById("modal");
    while (isEnabled && container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }

    const modal = (
        <div className="modal card" style={{top: coords.top, left: coords.left, right: coords.right, bottom: coords.bottom}}>
            {children}
        </div>
    )

    return isEnabled && createPortal(modal, container)
}

export default Modal;