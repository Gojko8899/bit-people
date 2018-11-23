import React from "react";
import User from '../../entities/User';
import { MyUser } from "./UserListItem"

const UserLists = (props) => {


    const listOfusers = props.users.map(function (user, index) {


        const newDate = new Date(user.date)

        const month = newDate.getMonth();
        const year = newDate.getFullYear();
        const day = newDate.getDate();

        // console.log(newDate.getFullYear())

        const fullDate = "Date of birth: " + day + ". " + year + ". " + (month + 1);

        return <MyUser key={index} photo={user.photo} name={user.name} email={user.email} date={fullDate} />


    })


    return (

        <div>{listOfusers}</div>

    )



}

export { UserLists }

