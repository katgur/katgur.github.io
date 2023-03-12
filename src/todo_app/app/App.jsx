import MainPage from '../pages/MainPage'
import TaskPage from '../pages/TaskPage'
import FullPage from '../pages/FullPage'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import store from './store.js'
import { Provider } from 'react-redux'
import '../style/index.css'

export const App = () => {
    return (
        <Provider store={store}>
          <DndProvider backend={HTML5Backend}>
            <Routes>
              <Route path="/todo" element={<MainPage />}>
                <Route path="/todo/create" element={<TaskPage />} />
                <Route path="/todo/edit/:id" element={<TaskPage />} />
              </Route>
              <Route path="/todo/full/:id" element={<FullPage />} />
            </Routes>
          </DndProvider>
        </Provider>
      )
  }