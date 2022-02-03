class Mediator {
    user1: User1
    user2: User2

    constructor() {
        this.user1 = new User1()
        this.user2 = new User2()
    }

    user1Method() {
        this.user1.method1()
    }

    user2Method() {
        this.user2.method2()
    }
}

class User1 {
    method1() {
        console.log('Its method1 from User1');
    }
}

class User2 {
    method2() {
        console.log('Its method2 from User2');
    }
}


const mediator = new Mediator();
mediator.user1Method()
mediator.user2Method()
