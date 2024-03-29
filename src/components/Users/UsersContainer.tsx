import React from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProcess,
    toggleIsFetching,
    unfollow,
    UserType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../coomon/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersPage
} from "../../Redux/users-selectors";


export type mapStateToPropsReturnType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: boolean
}

type mapDispatchReturnType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[] | any) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProcess: (isFetching: boolean, id: string) => void
    getUsers: (currentPage: number, pageSize: number) => void

}

export type UsersPropsType = mapStateToPropsReturnType & mapDispatchReturnType

class UsersContainerClass extends React.Component<UsersPropsType> {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

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
                   //toggleFollowingProcess={this.props.toggleFollowingProcess}
                   followingProgress={this.props.followingProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsReturnType => {
    return {
        users: getUsersPage(state),
        pageSize: getPageSize(state), //use selector instead following-- state.usersPage.pageSize
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
    }
}

let withRedirect = withAuthRedirect(UsersContainerClass);

// export const UsersContainer = connect(mapStateToProps, {
//                 // when object's  key === property the shorthand is available
//
//
//     follow,                   //equal to   follow: follow,
//     unfollow,                 //equal to   unfollow: unfollow,
//     setUsers,                 //equal to   setUsers: setUsers,
//     setCurrentPage,           //equal to   setCurrentPage: setCurrentPage,
//     setTotalUsersCount,       //equal to   setTotalUsersCount: setTotalUsersCount,
//     toggleIsFetching,         //equal to   toggleIsFetching: toggleIsFetching,
//     toggleFollowingProcess,
//     getUsers,
//
// })(withRedirect)

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, { // 1-st function wrapper
            follow,
            unfollow,
            setUsers,
            setCurrentPage,
            setTotalUsersCount,
            toggleIsFetching,
            toggleFollowingProcess,
            getUsers,
        }
    ))   // 2-nd function wrapper --> redirect unauthorised user to login page
(UsersContainerClass)     // Component

