import React from "react";
import  {Field, InjectedFormProps, reduxForm} from "redux-form";

type  FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <h1>Login</h1>
        <div>
            <Field type="text" placeholder={'Login'} name={'login'} component ={'input'}/>
        </div>
        <div>
            <Field type="text" placeholder={'Password'} name={'password'} component ={'input'}/>
        </div>
        <div>
            <Field type='checkbox' name={'rememberMe'} component ={'input'}/> remember me
        </div>
        <div>
            <button type={"submit"}>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login' // unique name of using form
}) (LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return <div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}