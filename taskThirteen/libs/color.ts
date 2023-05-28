import {Color} from "../types";

export class ColorForEngine implements Color{

    id: string = ""
    name: string = ""

    constructor(id: string, name: string){
        this.id = id;
        this.name = name;
    }

}
