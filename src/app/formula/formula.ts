export class formula{
    peso=0;
    calcular(masa:number){
        if(masa<=0){
            return 0;
        }
        this.peso=masa*9.8;
        return this.peso;
    }
}