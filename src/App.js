import { BrowserRouter as Router} from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { createPortal } from 'react-dom'

function App({ app }) {
    return createPortal(app, document.getElementById('app'))
}

export default App;
