class User {
    constructor(name) {
        this.name = name;
    }

    changeName(newName) {
        this.name = newName;
        this.speak();
    }

    speak() {
        console.log(this.name);
    }

}

const user = new User("Brady");
changeName = user.changeName;
changeName("Brian");
