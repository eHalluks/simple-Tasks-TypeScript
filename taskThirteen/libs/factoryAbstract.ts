export abstract class Factory {
    protected readonly name: string = "Factory outlet";
    abstract getName(): string;
}

export class ConcreteFactory extends Factory {
    getName(): string {
        return this.name;
    }
}


