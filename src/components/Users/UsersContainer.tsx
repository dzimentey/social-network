import React from "react";
import {connect} from "react-redux";
import {
    follow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching, unfollow,
    UserType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";
import preloader from './../../assets/images/preloader.gif'
import {Preloader} from "../coomon/preloader/Preloader";

export type mapStateToPropsReturnType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type mapDispatchReturnType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[] | any) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = mapStateToPropsReturnType & mapDispatchReturnType

class UsersContainerClass extends React.Component<UsersPropsType, any> {

    // constructor(props: UsersPropsType) {
    //     super(props);
    //     if (this.props.users.length === 0) {
    //
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
    //             this.props.setUsers(response.data.items)
    //         });
    //     }
    // }

    //  getUsers = () => {
    //     if (this.props.users.length === 0) {
    //
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
    //             this.props.setUsers(response.data.items)
    //         });
    //
    //     }
    // }

    componentDidMount() {

        this.props.toggleIsFetching(true)
        // if (this.props.users.length === 0)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
            headers: {
                "API-KEY" : "49c9fc27-b65d-436b-ad55-f34f2b452a65"
            }
        })
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true,
            headers: {
                "API-KEY" : "49c9fc27-b65d-436b-ad55-f34f2b452a65"
            }
        })
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        return <>
            {this.props.isFetching ?
                <Preloader/>
                : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} users={this.props.users}
                   onPageChanged={this.onPageChanged} follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsReturnType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): mapDispatchReturnType => { //(action: UserActionsType) => void  or Dispatch
//     return {
//         follow: (userId: string) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: string) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//     }
// }


// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerClass)
export const UsersContainer = connect(mapStateToProps, {
                // when object's  key === property the shorthand is available


    follow,                   //equal to   follow: follow,
    unfollow,                 //equal to   unfollow: unfollow,
    setUsers,                 //equal to   setUsers: setUsers,
    setCurrentPage,           //equal to   setCurrentPage: setCurrentPage,
    setTotalUsersCount,       //equal to   setTotalUsersCount: setTotalUsersCount,
    toggleIsFetching,         //equal to   toggleIsFetching: toggleIsFetching,

})(UsersContainerClass)

