  class Fila{ // criando classe fila 
    constructor(maxSize){
       this.maximo = maxSize;
       this.itens = [];
    }
//---------------------------------------------
    enqueue(elemento){ // insere elemento 
       if(this.itens.length === this.maximo)  // verificando se afila nao esta cheia 
           return false;  // nao adiciona  
       this.itens.push(elemento);// insere no final
       return true;    
    }

    dequeue(){
       let valor = this.itens.shift(); // remove elemento e mostra o proximo a ser atendido 
       return valor;
    }

    isEmpty(){ // verificando se a fila nao esta vazia 

      return this.itens.length === 0;
    }

    toString(){ // retorna os elementos que estao na fila 
      return this.itens.toString();
    }
    
   first(){ // mostra primeiro elemento da fila 
    return this.itens[0];
   }
   
}// fim classe 
  