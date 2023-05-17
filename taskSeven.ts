/*

    TASK: 7 (#fundamentals)

    DESCRIPTION: In Typescript exist three data modifiers
    ['public', 'private', 'protected']

    [ done ]TODO: 1# Create a simple example with PUBLIC
    [ done ]TODO: 2# Create a simple example with Private
    [  ]TODO: 3# Create a simple example with Protected

 */


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

class VirtualMachine {

    private isActivated: boolean = false

    constructor(
        public readonly computerName: string
    ) {}

    on(): boolean{
        try {
            this.isActivated = true;
            console.log("\n     Loading the system in progress....");
            return this.isActivated
        }catch (err){
            throw new Error("     An unexpected error has occurred. The computer can not be started at this time")
        }
    }

}

const pc = new VirtualMachine("PLWAWWSW2000EXTERNAL");
if(pc.on()){
    setTimeout(() => {
        console.log("\n     The Virtual Machine is ready");
    }, 4000);
}




class MainAlgorithm {
    static readonly repository: object[] = [];
    constructor(
        protected computeSimulation: string
    ){}

    inUse(simulation: object){
        MainAlgorithm.repository.push(simulation);
    }

}

class Dl extends MainAlgorithm {

    constructor(computeSimulation: string) {
        super(computeSimulation);
    }

}

class Ml extends MainAlgorithm {

    constructor(computeSimulation: string) {
        super(computeSimulation);
    }

}

const mainAl = new MainAlgorithm("DEV-7890-EPP");

mainAl.inUse(new Dl("DEXTER_SearchAnalyzer"));
mainAl.inUse(new Ml("CODE_SNIPPET_Generator"));

console.log(MainAlgorithm.repository);