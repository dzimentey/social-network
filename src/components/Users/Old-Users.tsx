import React from "react";
import {UsersStateType, UserType} from "../../Redux/users-reducer";
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import  axios from "axios";
import userPhoto from './../../assets/images/homer-warrior.jpg'

let arrUsers = [
    {
        id: '1',
        photoUrl: "https://static.planetminecraft.com/files/resource_media/screenshot/1218/mp1335340272752_2126903_thumb.jpg",
        followed: false,
        fullName: 'Maverick',
        status: 'Huge wave',
        location: {city: 'Half Moon Bay', country: 'US'}
    },
    {
        id: '2',
        photoUrl: 'https://ru.warface.com/forums/image.php?u=1248304&dateline=1399797419',
        followed: true,
        fullName: 'Big Rock',
        status: 'Boss',
        location: {city: 'Rock City', country: 'Mexico'}
    },
    {
        id: '3',
        photoUrl: 'https://gif-avatars.com/img/100x100/homer-stoned.gif',
        followed: false,
        fullName: 'Hermes',
        status: 'Supervisor',
        location: {city: 'Boca Chica', country: 'Dominicana'}
    },
]

export const OldUsers = (props: UsersPropsType ) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
                props.setUsers(response.data.items)
            });

        }
    }

    return (
        <div>

            <button onClick={getUsers}>Get users</button>

            {props.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small? u.photos.small : userPhoto} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}