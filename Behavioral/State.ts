abstract class State {
    protected context: Runing;

    public setContext(context: Runing) {
        this.context = context;
    }

    public abstract request(): void;

}

class Runing {
    private state: State;

    constructor(state: State) {
        this.translate(state);
    }

    public translate(state: State): void {
        this.state = state;
        this.state.setContext(this);
    }

    public request1(): void {
        this.state.request();
    }
}


class Started extends State {
    public request(): void {
        console.log("I a'm started");
        this.context.translate(new Finished());
    }
}

class Finished extends State {
    public request(): void {
        console.log("I a'm fineshed");
        this.context.translate(new Started());
    }
}

const run = new Runing(new Started())
run.request1()
run.request1()