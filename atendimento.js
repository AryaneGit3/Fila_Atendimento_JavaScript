 class Atendimento{ // Classe Atendimento 
 constructor() {
      this._nome = "";
      this._cpf = "";
      this._data = "";
      this._hora = "";
    }
  
    get nome() { // get busca valor 
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf) {
        this._cpf = cpf;
    }

    get data() {
        return this._data;
    }

    set data(data) {
        this._data = data;
    }

    get hora() {
        return this._hora;
    }

    set hora(hora) { // set passa valor 
        this._hora = hora;
    }

    equals(outroAtendimento) { // metodo equals 
      if (!(outroAtendimento instanceof Atendimento)) { // verifica se outroAtendimento eh instancia de Atendimento 
        return false; // o retorno eh false pq os cpfs sao diferentes 
      }
      return this._cpf === outroAtendimento.cpf; // return true pq os cpf de ambos objs sao iguais 
    }

    toString() { // retorna ao usuario a apresentcao do nome, data e hora de entrada 
        return `\nNome: ${this._nome} - Data: ${this._data} - Hora: ${this._hora}\n`;
      }
}
// $ template string eh a interpolacao entre variaveis dentro de uma String - "Concatenacao"
