import { automovil } from "./automoviles";

const ruedasMoto = 2;

export class moto extends automovil{
    
    private ruedas:number;
    

    constructor(color: string,rodado:number,marca:string,modelo:number,vtv:boolean,estado:boolean) {
        super(color, rodado, marca, modelo, vtv, estado);
        this.ruedas = ruedasMoto; 
    }
      
}