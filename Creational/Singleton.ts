class Singleton {

    private static instance: Singleton;

    private constructor() {
        console.log("constructor!");
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public logic() {
        console.log("metod!");
    }
}

let myInstance: Singleton = Singleton.getInstance();
myInstance.logic();
