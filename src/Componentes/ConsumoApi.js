import React,  { Component } from "react";
import Cats from './Cats';

export default class ConsumoApi extends Component{

  //Inicio el state con un arreglo vacío
      state = {
        cats: [],
          };

  
  //En componentDidMount realizo la peticion a la API a traves del método fetch
      componentDidMount() {
        fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
          return response.json();
        })
        .then((datos) => {
          this.setState ({cats:datos});
          console.log(datos)
        })
//Recargo la página cada 5 segundos
        setTimeout(function(){
          window.location.reload(1);
       }, 5000);
      }
  
    render() { 
      return(
        <>
        <h2>Random Cat</h2>
  
        {this.state.cats.length === 0 ? (
          <h3>Recuperando gatito</h3>
        ):(
            this.state.cats.map((items) => (
              <Cats key={items.id} imagen={items.url}/>
            ))
          )}
        </>
        );
  
    }
}