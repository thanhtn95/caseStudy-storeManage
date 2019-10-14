let User = function (id, name, gender, dob, username, password, position, salary) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.dob = dob;
    this.username = username;
    this.password = password;
    this.positon = position;
    this.salary = salary;

    this.getId = function () {
        return this.id;
    };

    this.setId = function (id) {
        this.id = id;
    }

    this.getName = function () {
        return this.name;
    };

    this.setName = function (name) {
        this.name = name;
    };

    this.getGender = function () {
        return this.gender;
    };

    this.setGender = function (gender) {
        this.gender = gender;
    };

    this.getDob = function () {
        return this.dob;
    };

    this.setDob = function (dob) {
        this.dob = dob;
    };

    this.getUsername = function () {
        return this.username;
    };

    this.getPassword = function () {
        return this.password;
    };

    this.setPassword = function (password) {
        this.password = password;
    };

    this.getPosition = function () {
        return this.positon;
    };

    this.setPosition = function (positon) {
        this.positon = positon;
    };

    this.getSalary = function () {
        return this.salary;
    };

    this.setSalary = function (salary) {
        this.salary = salary;
    };
}

function createUser() {
    let users = [];
    users.push(new User(1, "Thanh", "male", "1995-07-31", "zonesama", "380617", "Owner", 0));
    users.push(new User(2, "Henrik Ahnberg", "male", "1990-12-19", "bulldog", "pepega", "Store Manager", 400));
    users.push(new User(3, "Jerry Lundkvist", "male", "1991-06-04", "jerry", "fromeu", "Employee", 200));
    users.push(new User(4, "Gustav Magnusson", "male", "1992-04-01", "S4", "magnus", "Employee", 150));
    users.push(new User(5, "Joakim Akterhall", "male", "1988-05-26", "akke", "chen", "Store Manager", 450));
    users.push(new User(6, "Clement Ivanov", "male", "1990-03-06", "puppey", "monitor", "Employee", 250));
    users.push(new User(7, "Clinton Loomis", "male", "1988-02-19", "fear", "darkness", "Employee", 195));
    users.push(new User(8, "Katniss Everdeen", "female", "1995-08-15", "katniss", "bow", "Employee", 183));
    return users;
}

let testList2 = localStorage.getItem('userList');
if (testList2 == null) {
    localStorage.setItem('userList', JSON.stringify(createUser()));
}