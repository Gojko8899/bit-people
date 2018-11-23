import React from "react";
import { User } from '../../entities/User.js'
const MyUser = (porps) => {
    console.log(porps.email)

    let splitted = porps.email.split('@')
    let part1 = splitted[0];
    let part1sliced = part1.slice(0, 3) + '...@'
    let part2 = splitted[1]
    let concat = part1sliced + part2

    return (
        <div>
            <ul className='collection'>
                <li className="collection-item avatar">
                    <img src={porps.photo} alt="" className="circle" />
                    <span className="title">{porps.name}</span>
                    <p>{concat}<br />
                        {porps.date}
                    </p>
                </li>
            </ul>
        </div>

    )
}
export { MyUser }