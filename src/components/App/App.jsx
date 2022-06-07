import "./App.css";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import { Component } from "react";
import Spinner from "../../spinner/Spinner";
import SwapiServise from "../../services/SwapiServise";
import PersonPage from "../PersonPage/PersonPage";
import PlanetPage from "../PlanetPage/PlanetPage";
import StarshipPage from "../StarshipPage/StarshipPage";
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
  swapiService = new SwapiServise();

  state = {
    selectedPerson: 3,
    selectedPlanet: 1,
    selectedStarship: 3,
    errs: false,
  };

  OnPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  OnPlanetSelected = (id) => {
    this.setState({
      selectedPlanet: id,
    });
  };

  OnStarshipSelected = (id) => {
    this.setState({
      selectedStarship: id,
    });
  };

  componentDidCatch() {
    this.setState({ errs: true });
  }

  render() {
    if (this.state.errs) {
      return <Spinner />;
    }
    return (
      <div className="wrapper">
        <Header />
        <RandomPlanet />
        <Routes>
          <Route path="/" element={<h2 className="hcenter"> Привет в приложении Star Wars! </h2>} />

          <Route
            path="/people"
            element={
              <PersonPage
                OnItemSelected={this.OnPersonSelected}
                idPerson={this.state.selectedPerson}
                getData={this.swapiService.getAllPeople}
                renderItem={(item) => `${item.name}`}
              />
            }
          />

          <Route
            path="/planet"
            element={
              <PlanetPage
                OnItemSelected={this.OnPlanetSelected}
                idPlanet={this.state.selectedPlanet}
                getData={this.swapiService.getAllPlanets}
                renderItem={(item) => `${item.name}`}
              />
            }
          />

          <Route
            path="/starship"
            element={
              <StarshipPage
                OnItemSelected={this.OnStarshipSelected}
                idStarship={this.state.selectedStarship}
                getData={this.swapiService.getAllStarships}
                renderItem={(item) => `${item.name}`}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
