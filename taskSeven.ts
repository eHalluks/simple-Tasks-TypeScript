import chalk from 'chalk';

const createdObject: (Superset | ProgrammingLanguage)[] = [];

class Loop {
    constructor(
        public readonly forOf: boolean,
        public readonly forIn: boolean,
        public readonly forAwait: boolean,
        public readonly forI: boolean,
        public readonly forEach: boolean,
    ) {}
}

class Superset {
    constructor(
        public readonly name: string,
        public readonly relatedTo: string,
        public availableLoops: Loop,
    ) {}
}

class ProgrammingLanguage{
    constructor(
        public readonly name: string,
        public availableLoops: Loop,
    ) {}
}

const equipObject = (languageType: string, name: string, loopName: string) => {

    if(languageType === "Programming language") {
        const newProgrammingLanguage = new ProgrammingLanguage(name, new Loop(true, true, true, true, true));
        createdObject.push(newProgrammingLanguage);
    }else if(languageType === "Superset"){
        const superSetName = "JavaScript";
        const newSuperSet = new Superset(name, superSetName, new Loop(false, true, false, true, true));
        createdObject.push(newSuperSet);
    }

}

const displayObject = () => {

    createdObject.forEach(item => {
        console.log(`${chalk.magenta("\n###################\n")}`);
        console.log(item);
        console.log(`${chalk.cyanBright("\n###################")}`);
    })

}

equipObject("Programming language","JavaScript", "full");
equipObject("Superset","TypeScript", "full");
displayObject();