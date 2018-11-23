import { User } from '../entities/User';

const fetchUsers = () => {
    return fetch("https://randomuser.me/api/?results=15")
        .then(function (response) {
            return response.json();
        })
        .then(function (listOfUsers) {
            const niz = listOfUsers.results.map(function (user) {
                return new User(
                    user.name.first,
                    user.picture.medium,
                    user.email,
                    user.dob.date,
                );
            });

            return niz;
        });
}

export { fetchUsers }