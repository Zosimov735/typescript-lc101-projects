import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";

export class Rocket implements Payload {
    name: string;
    totalCapacityKg: number;
    cargoItems: Array<Cargo>;
    astronauts: Array <Astronaut>
    massKg: number;
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = []
        this.astronauts = []
    }
    sumMass(items: Payload[] ): number{
        let sum = 0
        for (let i = 0; i<items.length; i++){
            sum += items[i].massKg
        }
        return sum
    }

    currentMassKg(): number {
        let astroMass = 0
        for (let i = 0;i<this.astronauts.length; i++){
            astroMass += this.astronauts[i].massKg
        }
        return astroMass + this.sumMass(this.cargoItems)
    }

    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg ? true : false
          
    }

    addCargo(cargo: Cargo): boolean{
        if (this.canAdd(cargo)){
           this.cargoItems.push(cargo)
           return true
        }
        else {
            return false
        }
    }

    addAstronaut(astronaut: Astronaut): boolean{
        if (this.canAdd(astronaut)){
            this.astronauts.push(astronaut)
            return true
        }
        else {
            return false
        }
    }
}