import React from "react";
import {UserType} from "../../Redux/users-reducer";
import {Paginator} from "../coomon/Paginator/Paginator";
import {User} from "./User";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    onPageChanged: (pageNumber: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    //toggleFollowingProcess: (isFetching: boolean, id: string) => void
    followingProgress: any
}

export const Users = (props: UsersPropsType) => {

    let portionSize = 20;

    return <div>

        <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged} portionSize={portionSize}/>

        {props.users.map((u: UserType) => <User follow={props.follow}
                                                   unfollow={props.unfollow}
                                                   followingProgress={props.followingProgress}
                                                   user={u} key={u.id} />
        )}

    </div>;
}
