interface Hero {
    name():string;
}

class HeroInfo {
    public intelligence: number;
    public strange: number;
    public skill: number;

    constructor(intelligence:number, strange:number, skill:number) {
        this.intelligence = intelligence;
        this.strange = strange;
        this.skill = skill;
    }

    getInfo (): string {
        return `Intelligence: ${this.intelligence}*, Strange ${this.strange}*, Skill ${this.skill}*`;
    }
}

class InvokerInfo extends HeroInfo {
    constructor(){
        super(99, 1000, 145);
    }
}


class PudgeInfo extends HeroInfo {
    constructor(){
        super(999, 9999, 999);
    }
}

class Invoker implements Hero {
    public info: any;
    
    constructor(info:any){
        this.info = info;
    }

    name() {
        return "Invoker";
    }

    changeInfo(): string {
        return `Hero: ${this.name()}, Info: ${this.info.getInfo()}`
    }
}

console.log("");

const invokerWithPudgeStats = new Invoker(new PudgeInfo);
console.log(invokerWithPudgeStats.changeInfo());

console.log("");

const invokerWithInvokerStats = new Invoker(new InvokerInfo);
console.log(invokerWithInvokerStats.changeInfo());

console.log("");