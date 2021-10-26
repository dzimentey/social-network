import s from './FormsControls.module.css'

export const Textarea = ( props: any)=> {

    const gotError = props.meta.touched && props.meta.error

    return (
        <div className={s.formControl +' '+ (gotError ? s.error : '')}>
            <div>
                <textarea {...props.input} {...props} />
            </div>
            {gotError ? <span>{props.meta.error}</span> : <br/> }
        </div>
    )
}

// {...props} means that textarea component gives all the props to a child component

export const Input = ( props: any)=> {

    const gotError = props.meta.touched && props.meta.error

    return (
        <div className={s.formControl +' '+ (gotError ? s.error : '')}>
            <div>
                <input {...props.input} {...props} />
            </div>
            {gotError ? <span>{props.meta.error}</span> : <br/> }
        </div>
    )
}