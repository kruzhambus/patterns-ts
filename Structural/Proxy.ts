interface Words {
    cheackWord(str1:string, str2:string): void;
}

class ProxyWord implements Words {
    public word: SomeWords 
    constructor(word: SomeWords) {
        this.word = word;
    }
    
    cheack() : boolean {
        console.log("Words cheacking...");
        return true
    }

    cheackWord(str1:string, str2:string): void {
        this.cheack() == true ? this.word.cheackWord(str1, str2) : console.log("Words are not checked :(");
        this.afterCheack();
    }

    afterCheack() : void {
        console.log("Words cheacked!");
    }
}

class SomeWords implements Words {
    cheackWord(str1:string, str2:string): void {
        str1 == str2 ? console.log("Words equal!"): console.log("Words different!");
    }
}

const something = new SomeWords();
something.cheackWord("asd", "asd")
console.log("");
const proxy = new ProxyWord(something);
proxy.cheackWord("asd", "asd")