class User {
    constructor(name, photo, email, date) {
        this.name = name;
        this.photo = photo;
        this.email = email;
        this.date = date;
    }

    getHiddenEmail() {


        let splitted = this.email.split('@')
        let part1 = splitted[0];
        let part1sliced = part1.slice(0, 3) + '...@'
        let part2 = splitted[1]
        let concat = part1sliced + part2;
        return concat;

    }

    getDate() {

        const newDate = new Date(this.date)
        const month = newDate.getMonth();
        const year = newDate.getFullYear();
        const day = newDate.getDate();
        const fullDate = "Date of birth: " + day + ". " + year + ". " + (month + 1);
        return fullDate;

    }


}
export { User };

