
export class DestinoViajes{
private selected:boolean;
public servicios:string[];


    constructor(public nombre: string, public u: string){   
        
         this.servicios = ['pileta','desayuno','etcUno'];

    }

    isSelected():boolean{
        return this.selected;
    }
    setSelected(s:boolean){
        this.selected = s;
    }
}
