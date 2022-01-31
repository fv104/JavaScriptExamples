class Persona{
    
    //Propiedades
    // nombre
    // apellidos
    //Propiedad privada
    #edad

    //Cosntructor
    constructor(nombre,apellidos,edad){
        this._nombre = nombre
        this._apellidos = apellidos
        this.#edad = edad;
    }

    //Metodos
    fullName() {
        return `${this._nombre} ${this._apellidos} ${this.#edad}`
    }
    //Getters and setters
    get nombre(){
        return `${this._nombre}`
    }
    get apellidos(){
        return `${this._apellidos}`
    }
    get edad(){
        return`${this.#edad}`
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    set apellidos(apellidos){
        this._apellidos = apellidos
    }
}
let persona = new Persona("Felix","Vicenta",34)
console.log(persona)
console.log(persona.edad)