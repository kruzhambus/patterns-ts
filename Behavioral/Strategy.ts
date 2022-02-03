interface Strategy {
    discount(amount:number): number;
}

class Pay {
    private strategy: Strategy;
    public sum: number;

    constructor(strategy: Strategy, sum: number) {
        this.strategy = strategy;
        this.sum = sum;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public youPay() {
        console.log(`You need pay ~ ${this.sum}!`);
        const res = this.strategy.discount(this.sum)
        console.log("After use discont you need pay", res);
    }
}

class GoldDiscount implements Strategy {
    discount(amount: number): number {
        console.log("You discount 70%");
        return amount - (amount * 0.70);
    }
}

class PremiumDiscount implements Strategy {
    discount(amount: number): number {
        console.log("You discount 90%");
        return amount - amount * 0.90;
    }
}


const gold = new GoldDiscount();
const premium = new PremiumDiscount();
const payPal = new Pay(gold, 500);
console.log("");
payPal.youPay();
console.log("");
payPal.setStrategy(premium);
payPal.youPay();
console.log("");
