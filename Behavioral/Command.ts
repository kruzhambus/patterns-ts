class Account {
    state: boolean = false;
    money: number;

    constructor (money: number) {
        this.money = money;
    }

    pay(money: number) {
        this.money += money
        this.state = true;
    }

    send(money: number) {
        this.money -= money
        this.state = false;
    }
}


interface Command {
    execute(): any;
}


class PayCommand implements Command {
    account: Account;
    money: number;

    constructor(account: Account,money: number) {
        this.account = account;
        this.money = money;
    }

    execute() {
        this.account.pay(this.money);
    }
}

class SendCommand implements Command {
    account: Account;
    money: number;

    constructor(account: Account,money: number) {
        this.account = account;
        this.money = money;
    }

    execute() {
        this.account.send(this.money);
    }
}

class Banck {
    payCommand: Command;
    sendCommand: Command;

    setCommand(payCommand: Command, sendCommand: Command) {
        this.payCommand = payCommand;
        this.sendCommand = sendCommand;
    }

    payButtonClick() {
        this.payCommand.execute();
    }

    sendButtonClick() {
        this.sendCommand.execute()
    }
}


let account = new Account(500);
let payCommand = new PayCommand(account, 50);
let sendCommand = new SendCommand(account, 300);

console.log("Money after PayCommand, SendCommand:", account.money);

let banck = new Banck();

banck.setCommand(payCommand, sendCommand);
banck.payButtonClick();

console.log("Money after PayButtonClick:", account.money);

banck.sendButtonClick();

console.log("Money after SendButtonClick:", account.money);
