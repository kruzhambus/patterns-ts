class Prototype {
    public color: string;
    public num: number;
    public text: string;

    constructor(color: string, num: number, text: string){
        this.color = color;
        this.num = num;
        this.text = text;
    }

    public clone () {
        return new Prototype(this.color, this.num, this.text);
    }
}

const prototypeNew = new Prototype('red', 42, 'Some text');

const prototypeNew1 = prototypeNew.clone();
const prototypeNew2 = prototypeNew.clone();


console.log(prototypeNew1);
console.log(prototypeNew2);