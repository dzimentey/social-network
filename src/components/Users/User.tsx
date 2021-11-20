import React from "react";
import s from "./Users.module.css";
import {UserType} from "../../Redux/users-reducer";
import userPhoto from "../../assets/images/homer-warrior.jpg";
import {NavLink} from "react-router-dom";

type UserPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    followingProgress: any
    user: UserType
}

export const User = ({user, ...props}: UserPropsType) => {

    return <div>
                <span>
                    <div>
                        <NavLink to={'profile/' + user.id}>
                            <img src={user.photos.small ? user.photos.small : userPhoto} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button
                                disabled={props.followingProgress.some((id: any) => id === user.id)}
                                onClick={() => {
                                    props.unfollow(user.id)
                                }}>
                                Unfollow
                            </button>

                            : <button
                                disabled={props.followingProgress.some((id: any) => id === user.id)}
                                onClick={() => {
                                    props.follow(user.id)
                                }}>
                                Follow
                            </button>}

                    </div>
                </span>
        <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
    </div>
}


