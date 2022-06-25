import {IAbility} from "./Ability"
import {IType} from "./Type"

export interface IPokemon {
    name: string;
    abilities: IAbility[];
    height: number;
    weight: number;
    base_experience: number;
    description: string;
    category: string;
    types: IType[];
};

// export class Pokemon implements IPokemon {
//     name: string;
//     abilities: IAbility[];
//     height: number;
//     weight: number;
//     base_experience: number;
//     description: string;
//     category: string;
//     types: IType[];
    
//     getWeight(): string {
//         return this.weight / 10 + " kg";
//     };
//     getHeight(): string {
//         return this.height / 10 + " kg";
//     };
// }

