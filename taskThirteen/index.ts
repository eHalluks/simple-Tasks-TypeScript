import {EnginToProcess} from "./libs/engine";
import { v4 as uuid } from 'uuid';
import {ColorNameSpace} from "./namespacers/ColorNamesSpace";

const engineProduction = (modelToImplement: string = "" ,selectedColor: string, ): EnginToProcess => {
    return new EnginToProcess(uuid(),modelToImplement , selectedColor);
}

console.log(engineProduction("EXO-V57-TRACKCa257_1000", ColorNameSpace["ColorsToUse"][2]))

