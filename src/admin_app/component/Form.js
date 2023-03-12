import { useForm } from 'react-hook-form'

function Form({ fields, buttons, submit }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(submit.action)}>
            {fields.map((field) => {
                return (
                    <div key={field.name} className="form-field">
                        {errors[field.name] && <span className="font-caution">Обязательное поле</span>}
                        <input {...register(field.name, { required: true })} placeholder={field.text} type={field.type} className={field.style} />
                    </div>
                )
            })}
            <div className="form-submit justify__space-around">
                <input type="submit" value={submit.text} className={submit.style} />
                {buttons.map(button => {
                    return (
                        <input key={button.text} type="button" value={button.text} className={button.style} onClick={button.onClick} />
                    )
                })}
            </div>
        </form>
    )
}

export default Form;
