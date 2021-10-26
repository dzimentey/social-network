import React from "react";
import  {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../coomon/FormsControls";
import {requiredField} from "../../Utilits/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";

type  FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <h1>Login</h1>
        <div>
            <Field type="text" placeholder={'Email'} name={'email'} component ={Input}
            validate={[requiredField]}/>
        </div>
        <div>
            <Field type="password" placeholder={'Password'} name={'password'} component ={Input}
                   validate={[requiredField]}/>
        </div>
        <div>
            <Field type='checkbox' name={'rememberMe'} component ={Input}/> remember me
        </div>
        <div>
            <button type={"submit"}>Login</button>
        </div>
    </form>
}


const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login' // unique name of using form
}) (LoginForm)



type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => any
    isAuth: boolean
}

 const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData);
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login)