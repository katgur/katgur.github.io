import { useNavigate } from 'react-router'
import Form from '../component/Form'
import { getUser } from '../data/authApi';

function AuthPage() {
    const navigate = useNavigate();

    const formData = [{text: "Почта", name:"email", type: "text", style:"input-blue__outline"}, {text: "Пароль", name:"password", type: "password", style:"input-blue__outline"}]
    const buttons =  [{text: "Регистрация", style:"button__outline", onClick:(() => navigate('/admin/register'))}]
    const onSubmit = data => {
        getUser().then(user => {
            if (!user) {
                navigate('/admin/register');
            } else if (user.email !== data.email || user.password !== data.password) {
                
            }
            else {
                navigate('/admin');
            }
        })
    }
    const submit = {text:"Войти", style:"button__filled", action:onSubmit};

    return (
        <div className="single-content">
            <h2>
                Вход
            </h2>
            <Form fields={formData} buttons={buttons} submit={submit}/>
        </div>
    )

}

export default AuthPage;