import React from "react";
import { User } from '../../entities/User'

const MyUser = (props) => {
    console.log(props)

    const { name, photo } = props.user

    return (

        <ul className='collection'>
            <li className="collection-item avatar">
                <img src={photo} alt="" className="circle" />
                <span className="title">{name}</span>
                <p>{props.user.getHiddenEmail()}<br />
                    {props.user.getDate()}
                </p>
            </li>
        </ul>

    )

}

const MyUserGrid = (props) => {

    const { name, photo, email, date } = props.user
    return (

        <div class="col s12 m4 l3">
            <div class="card">
                <div class="card-image">
                    <img src={photo} />
                    <span class="card-title">Card Title</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                    <a href="#">This is a link</a>
                </div>
            </div>
        </div>


    )


}

export { MyUser, MyUserGrid }