import React from "react";

export const Login = () => {
    return <div>
        <LoginForm/>
    </div>
}

export const LoginForm = () => {
    return <form>
        <h1>Login</h1>
        <div>
            <input type="text" placeholder={'Login'}/>
        </div>
        <div>
            <input type="text" placeholder={'Password'}/>
        </div>
        <div>
            <input type='checkbox'/> remember me
        </div>
        <div>
            <button type={"submit"}>Login</button>
        </div>
    </form>
}