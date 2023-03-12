import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router'
import Form from '../component/Form'
import { addUser } from '../data/authApi';
import { set } from '../feature/authSlice';

function RegisterPage() {
    const navigate = useNavigate();
    const fields = [{text: "Почта", name: "email", type: "text", style:"input-blue__outline"}, 
                    {text: "Пароль", name: "password", type: "password", style:"input-blue__outline"}];
    const buttons = [{text: "Отмена", style:"button__outline", onClick:(() => navigate('/login'))}]

    const onSubmit = data => {
        const user = {email:data.email, password:data.password};
        addUser(user);
        set(user);
        navigate('/admin/login');
    }
    const submit = {text: "Готово", style:"button__filled", action:onSubmit}
    
    return (
        <div className="single-content">
            <h2>
                Регистрация
            </h2>
            <Form fields={fields} buttons={buttons} submit={submit} />
        </div>
    )
}

export default RegisterPage;