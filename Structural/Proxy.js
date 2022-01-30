var ProxyWord = /** @class */ (function () {
    function ProxyWord(word) {
        this.word = word;
    }
    ProxyWord.prototype.cheack = function () {
        console.log("Words cheacking...");
        return true;
    };
    ProxyWord.prototype.cheackWord = function (str1, str2) {
        this.cheack() == true ? this.word.cheackWord(str1, str2) : console.log("Words are not checked :(");
        this.afterCheack();
    };
    ProxyWord.prototype.afterCheack = function () {
        console.log("Words cheacked!");
    };
    return ProxyWord;
}());
var SomeWords = /** @class */ (function () {
    function SomeWords() {
    }
    SomeWords.prototype.cheackWord = function (str1, str2) {
        str1 == str2 ? console.log("Words equal!") : console.log("Words different!");
    };
    return SomeWords;
}());
var something = new SomeWords();
something.cheackWord("asd", "asd");
console.log("");
var proxy = new ProxyWord(something);
proxy.cheackWord("asd", "asd");
