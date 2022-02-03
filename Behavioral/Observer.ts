interface News {
    subscribe(observer: Observer): void
    unsubscribe(observer: Observer): void
    notify(news: String): void
}


interface IObserver {
    update(news: string): void
}


class Media implements News {
    private observers: Observer[] = [];

    subscribe(observer: Observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer: Observer) {
        this.observers = this.observers.filter( element => { 
            return observer.name !== element.name 
        })
    }

    notify(news: string) {
        this.observers.forEach(observer => {
            observer.update(news);
        })
    }
}


class Observer implements IObserver {
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    private messange: string[] = [];

    update(news: string) {
        this.messange.push(news)
        console.log(`${this.name}: got a news`)
    }

    showMessange() {
        console.log(this.name + ": " + this.messange)
    }
}

const user1 = new Observer("User1");
const user2 = new Observer("User2");

const media = new Media();

media.subscribe(user1);
media.subscribe(user2);
media.notify("Notify from media");
media.unsubscribe(user2);
media.notify("Notify 2 from media");
user1.showMessange();
user2.showMessange();