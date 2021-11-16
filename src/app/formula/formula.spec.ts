import { formula } from "./formula";

describe ('Calcular',() => {
    let form: formula;
    let peso: number;
    beforeEach(()=>{
        form= new formula();
    });
    
    it('Si la masa es 0, el peso debe ser 0',() =>{  
        peso=form.calcular(0);
        expect(peso).toBe(0);
    });
    it('Si la masa es -40, el peso debe ser 0',() =>{  
        peso=form.calcular(-40);
        expect(peso).toBe(0);
    });
    it('Si la masa es 10, el peso debe ser 98',() =>{  
        peso=form.calcular(10);
        expect(peso).toBe(98);
    });

});
