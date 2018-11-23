import React from "react";
import User from '../../entities/User';
import { MyUser, MyUserGrid } from "./UserListItem"


const UserList = (props) => {
    const listOfusers = props.users.map(function (user, index) {
        return <MyUser key={index} user={user} />

    })

    return (

        <div>
            <button className='button'>Change View</button>
            {listOfusers}
        </div>
    )
}

const UserGrid = (props) => {
    const listOfusersGrid = props.users.map(function (user, index) {
        return <MyUserGrid key={index} user={user} />
    })

    return (
        <div className='container'>
            <div class="row">
                {listOfusersGrid}
            </div>
        </div>
    )
}
export { UserList, UserGrid }

