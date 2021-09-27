import React from "react";
import c from './Post.module.css'
type PostPropsType = {
    message: string
    likesAmount: string
}
export const Post = (props: PostPropsType) => {
    return (
        <div className={c.post}>
            <img alt={'avatar'}
                 src={'https://i0.wp.com/www.defensemedianetwork.com/wp-content/uploads/2012/09/Army-Gas-Mask-And-Protective-Clothing.jpg?ssl=1'}/>
            {props.message}
            <span>     </span>
            <span>like: </span> {props.likesAmount}
        </div>
    )
}