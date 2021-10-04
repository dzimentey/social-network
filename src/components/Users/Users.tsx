import React from "react";
import s from "./Users.module.css";
import {UserType} from "../../Redux/users-reducer";
import userPhoto from "../../assets/images/homer-warrior.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {followUser, unFollowUser} from "../../api/api";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    onPageChanged: (pageNumber: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => <span onClick={(e) => {
                props.onPageChanged(p)
            }} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>)}
        </div>

        {/*<button onClick={this.getUsers}>Get users</button>*/}

        {props.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'profile/' + u.id}>
                            <img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {

                                // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                //     withCredentials: true,
                                //     headers: {
                                //         "API-KEY" : "49c9fc27-b65d-436b-ad55-f34f2b452a65"
                                //     }
                                // })
                                unFollowUser(u.id)

                                    .then((data) => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    });

                            }}>Unfollow</button> :
                            <button onClick={() => {

                                // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                //     withCredentials: true,
                                //     headers: {
                                //         "API-KEY" : "49c9fc27-b65d-436b-ad55-f34f2b452a65"
                                //     }
                                // })
                                followUser(u.id)
                                    .then((data) => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    });

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
    </div>;
}
