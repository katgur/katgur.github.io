import TableViewer from '../component/TableViewer'
import Form from '../component/Form'
import ProfileViewer from '../component/ProfileViewer'
import MainPage from '../page/MainPage'
import { Routes, Route } from 'react-router'
import { BrowserRouter as Router} from 'react-router-dom'
import AuthPage from '../page/AuthPage'
import RegisterPage from '../page/RegisterPage'
import store from '../app/store.js'
import { Provider, useSelector } from 'react-redux'
import '../style/nullify.css'
import '../style/style.css'
import '../style/font.css'
import '../style/index.css'

export function App() {
    const orgList = (
      <TableViewer header="Список организаций" columns={["Название", "Адрес"]} items={[
        {id: 0, data: ["Абвгде", "ул. Жзийклм д.123"]},
        {id: 1, data: ["Абвгде", "ул. Жзийклм д.123"]},
        {id: 2, data: ["Абвгде", "ул. Жзийклм д.123"]},
        {id: 3, data: ["Абвгде", "ул. Жзийклм д.123"]},
        {id: 4, data: ["Абвгде", "ул. Жзийклм д.123"]},
        {id: 5, data: ["Абвгде", "ул. Жзийклм д.123"]},
        {id: 6, data: ["Абвгде", "ул. Жзийклм д.123"]},
        {id: 7, data: ["Абвгде", "ул. Жзийклм д.123"]},
        {id: 8, data: ["Абвгде", "ул. Жзийклм д.123"]},
        {id: 9, data: ["Абвгде", "ул. Жзийклм д.123"]}
        ]} />
    )
    const form = (
      <Form fields={[{name: "name", text:"Имя", type: "text", style:"input-blue__filled"}, {name:"surname", text: "Фамилия", type: "text", style:"input-blue__filled"}]}
      buttons={[{text: "Отмена", style:"button__outline"}]} submit={{text: "Готово", style:"button__filled", action:(()=>{})}} />
    )
    const profile = (
      <ProfileViewer />
    )
    const mainPage = (
      <MainPage>

      </MainPage>
    )
    const authPage = (
      <AuthPage />
    )
    const regPage = <RegisterPage />
    return (
      <Provider store={store}>
            <Routes>
              <Route path="/admin/login" element={authPage} />
              <Route path="/admin/register" element={regPage} />
              <Route path='/admin' element={mainPage}>
                <Route path='/admin/list' element={orgList} />
                <Route path='/admin/edit_profile' element={form} />
                <Route path='/admin/profile' element={profile} />
              </Route>
            </Routes>
      </Provider>
    )
}

export default App;
