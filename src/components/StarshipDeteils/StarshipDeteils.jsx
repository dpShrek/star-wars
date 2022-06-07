import React, { Component } from "react";
import SwapiServise from "../../services/SwapiServise";
import Spinner from "../../spinner/Spinner";
import "./StarshipDeteils.css";

export default class StarshipDeteils extends Component {

  SwapiServise = new SwapiServise();

  state = {
    starship: {},
    loading: true
  };

  componentDidMount() {
    this.updateStarship();
  }

  componentDidUpdate(prevProps) {
    if(this.props.idStarship !== prevProps.idStarship) {
      this.setState({loading: true });
      this.updateStarship();
    }
  }

  onStarshipLoded = (starship) => {
    this.setState({ starship, loading: false });
  };

  updateStarship() {
    let id = this.props.idStarship;
    if(!id) {
      return;
    }
    this.SwapiServise.getStarships(id).then(this.onStarshipLoded);
  }
  
  render() {
    const { starship, loading } = this.state;
    
    if (loading) {
      return (
          <Spinner />
      );
    }

    return (
      <div className="starshipDeteils-wrapper  ">
        <div className="card border-dark d-flex">
          <StarshipView starship={starship} />
      </div>
    </div>
      
        
    );
  }
}

const StarshipView = ({ starship }) => {
  const { id, name, length, crew, passengers } = starship;

  return (
    <>
      <div className="starshipDeteils-icon">
        <img
           src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
          alt="Foto"
        />
      </div>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">Длина: {length}</p>
        <p className="card-text">Экипаж: {crew} чел</p>
        <p className="card-text">Пассажиры: {passengers} чел</p>
       
      </div>
    </>
  );
  };

  