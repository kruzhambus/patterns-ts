abstract class ClickGame {
    public click:number = 0;
    public templateMethod() {
        this.clickMethod();
        this.howManyClick();
        this.resetGame();
    }

    protected howManyClick():void {
        console.log("You have",this.click, "points");
    }

    protected clickMethod(): void {
        console.log("You click");
        this.click = this.click + 1;
    }

    protected resetGame(): void {
        this.click = 0;
    }

}

class ClickGameWon extends ClickGame {
    protected resetGame(): void {
        console.log("Good job! You won this game.");
        this.click = 0;
    }
}

class ClickGameBonus extends ClickGame {
    protected clickMethod(): void {
        console.log("You click! +50 points");
        this.click = this.click + 50;
    }

    protected resetGame(): void {
        console.log("You won this game.");
        this.click = 0;
    }
}

const user1 = new ClickGameWon();
const user2 = new ClickGameBonus();
user1.templateMethod();
console.log("");
user2.templateMethod();