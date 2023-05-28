import {Engine} from "../types";
import {Factory, ConcreteFactory} from "./factoryAbstract";

const concreteFactory = new ConcreteFactory();

export class EnginToProcess implements Engine{

    id: string = ""
    Producent: string = concreteFactory.getName();
    model: string = ""
    color: string = "";

    constructor(id: string, model: string, colorEngine: string){
        this.id = id;
        this.model = model;
        this.color = colorEngine;
    }

}