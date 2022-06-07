import React, { Component } from "react";
import SwapiServise from "../../services/SwapiServise";
import Spinner from "../../spinner/Spinner";
import "./PlanetDeteils.css";

export default class PlanetDeteils extends Component {

  SwapiServise = new SwapiServise();

  state = {
    planet: {},
    loading: true
  };

  componentDidMount() {
    this.updatePlanet();
  }

  componentDidUpdate(prevProps) {
    if(this.props.idPlanet !== prevProps.idPlanet) {
      this.setState({loading: true });
      this.updatePlanet();
    }
  }

  onPlanetLoded = (planet) => {
    this.setState({ planet, loading: false });
  };

  updatePlanet() {
    let id = this.props.idPlanet;
    if(!id) {
      return;
    }
    this.SwapiServise.getPlanets(id).then(this.onPlanetLoded);
  }
  
  render() {
    const { planet, loading } = this.state;
   
    if (loading) {
      return (
          <Spinner />
      );
    }
    
    return (
      <div className="palnetDeteils-wrapper">
        <div className="card border-dark d-flex">
          <PlanetView planet={planet} />
      </div>
    </div>
      
        
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;  

  return (
    <>
      <div className="palnetDeteils-icon">
        <img
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="Foto"
        />
      </div>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">Население: {population}</p>  
        <p className="card-text">Период вращение : {rotationPeriod} дней</p> 
        <p className="card-text">Диаметр: {diameter} km</p> 
      </div>
    </>
  );
  };

  