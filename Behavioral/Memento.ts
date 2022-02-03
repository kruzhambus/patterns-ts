class Memento {
    private state: Object;

    constructor(state: Object) {
        this.state = state;
    }

    getState(): Object {
        return this.state;
    }
}

class Creater {
    private state: Object;

    setState(state: Object) {
        this.state = state;
        console.log("SetState: ", this.state);
    }

    commit(): Memento {
        console.log("Save to Memento.");
        return new Memento(this.state);
    }

    backState(m:Memento) {
        this.state = m.getState();
        console.log("BackState: ", this.state);
    }
}

class Caretaker {
    private mementos = [];

    addMemento(m:Memento) {
        this.mementos.push(m);
    }

    getMemento(index: number): Memento {
        return this.mementos[index];
    }
}


const creator = new Creater();
const caretaker = new Caretaker();

creator.setState({name: "Invoker"})
caretaker.addMemento(creator.commit())

creator.setState({name: "Pudge"})
caretaker.addMemento(creator.commit())

creator.backState(caretaker.getMemento(0))

