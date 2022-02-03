interface IIterator {
    next(): IForMethod
    hasNext(): boolean
}

class ClassIterator implements IIterator {
    index: number = 0
    method: IForMethod[]

    constructor(method: IForMethod[]) {
        this.method = method
    }

    next(): IForMethod {
        const methods = this.method[this.index]
        this.index += 1
        return methods
    }

    hasNext(): boolean {
        return this.index < this.method.length
    }
}

interface IForMethod {
    method(): void
}

class SomeClass implements IForMethod {
    private name: string
    constructor(str:string) {
        this.name = str;
    }

    method(): void {
        console.log(this.name)
    }
}

const method = [
    new SomeClass("Invoker"),
    new SomeClass("Pudge"),
    new SomeClass("Lina"),
    new SomeClass("Earth Spirit"),
]

const iterator = new ClassIterator(method)

while (iterator.hasNext()) {
    iterator.next().method()
}