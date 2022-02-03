var Account = /** @class */ (function () {
    function Account(money) {
        this.state = false;
        this.money = money;
    }
    Account.prototype.pay = function (money) {
        this.money += money;
        this.state = true;
    };
    Account.prototype.send = function (money) {
        this.money -= money;
        this.state = false;
    };
    return Account;
}());
var PayCommand = /** @class */ (function () {
    function PayCommand(account, money) {
        this.account = account;
        this.money = money;
    }
    PayCommand.prototype.execute = function () {
        this.account.pay(this.money);
    };
    return PayCommand;
}());
var SendCommand = /** @class */ (function () {
    function SendCommand(account, money) {
        this.account = account;
        this.money = money;
    }
    SendCommand.prototype.execute = function () {
        this.account.send(this.money);
    };
    return SendCommand;
}());
var Banck = /** @class */ (function () {
    function Banck() {
    }
    Banck.prototype.setCommand = function (payCommand, sendCommand) {
        this.payCommand = payCommand;
        this.sendCommand = sendCommand;
    };
    Banck.prototype.payButtonClick = function () {
        this.payCommand.execute();
    };
    Banck.prototype.sendButtonClick = function () {
        this.sendCommand.execute();
    };
    return Banck;
}());
var account = new Account(500);
var payCommand = new PayCommand(account, 50);
var sendCommand = new SendCommand(account, 300);
console.log("Money after PayCommand, SendCommand:", account.money);
var banck = new Banck();
banck.setCommand(payCommand, sendCommand);
banck.payButtonClick();
console.log("Money after PayButtonClick:", account.money);
banck.sendButtonClick();
console.log("Money after SendButtonClick:", account.money);
