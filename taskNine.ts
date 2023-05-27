/*

    TASK: 9 (#fundamentals)

    DESCRIPTION: Simple example show how the Abstract class works in typeScript

    [ in progress ] TODO 1# create an abstract class
    [ in progress ] TODO 2# create other structure and show how it works

 */


abstract class Dealer {
    constructor(protected readonly dealerName: string = "Mercedes") {}
}
class Engine extends Dealer {

    constructor(public engineType: string) {
        super();
    }

}
class Transmission extends Dealer {

    constructor() {
        super();
    }

}
class Cockpit extends Dealer {

    constructor() {
        super();
    }

}
class Seat extends Dealer {

    constructor() {
        super();
    }

}

class ModelCard extends Dealer {

    constructor() {
        super();
    }

}