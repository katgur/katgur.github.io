import MainPage from '../pages/MainPage'
import TaskPage from '../pages/TaskPage'
import FullPage from '../pages/FullPage'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Route, Routes } from 'react-router-dom'

export const App = ({ link }) => {
    return (
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route path={link} element={<MainPage />}>
            <Route path={`${link}/create`} element={<TaskPage />} />
            <Route path={`${link}/edit/:id`} element={<TaskPage />} />
          </Route>
          <Route path={`${link}/full/:id`} element={<FullPage />} />
        </Routes>
      </DndProvider>
      )
  }