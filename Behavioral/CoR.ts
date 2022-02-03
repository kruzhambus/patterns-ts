interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: number): string;
}

abstract class CoR implements Handler {
    private nextHandler: Handler;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: number): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

class Card1 extends CoR {
    public handle(request: number): string {
        if (request < 200) {
            return `You pay ${request}. Card1 `;
        }
        return super.handle(request);

    }
}

class Card2 extends CoR {
    public handle(request: number): string {
        if (request < 500) {
            return `You pay ${request}. Card2 `;
        }
        return super.handle(request);

    }
}

class Card3 extends CoR {
    public handle(request: number): string {
        if (request < 700) {
            return `You pay ${request}. Card3 `;
        }
        return super.handle(request);

    }
}

const card1 = new Card1()
const card2 = new Card2()
const card3 = new Card3()

const func = (req: Handler, num: number) => {
    const card = req.handle(num)
    if (card) {
        console.log(card);
    }
    else {
        console.log("No money");
    }
}

card1.setNext(card2).setNext(card3)

func(card1, 350);
func(card3, 100)
func(card1, 600)
func(card1, 850)
