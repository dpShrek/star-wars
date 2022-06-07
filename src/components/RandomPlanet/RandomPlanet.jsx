import { Component } from "react";
import SwapiServise from "../../services/SwapiServise";
import Spinner from "../../spinner/Spinner";
import "./RandomPlanet.css";
import icon from "./planet.png";

export default class RandomPlanet extends Component {
  swapiService = new SwapiServise();

  state = {
    planet: {},
    loading: true,
    errors: false,
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(() => {
      this.updatePlanet();
    }, 4500);
  }

  componentDidUpdate() {
    
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onError = () => {
    this.setState({ errors: true, loading: false });
  };

  onPlanetLoded = (planet) => {
    this.setState({ planet, loading: false });
  };

  updatePlanet() {
    let id = Math.floor(Math.random() * 20) + 3;
    this.swapiService
      .getPlanets(id)
      .then(this.onPlanetLoded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, errors } = this.state;
    const errs = errors ? <PlanetError /> : null;
    const loadings = loading ? <Spinner /> : null;
    const planets = !loading && !errors ? <PlanetView planet={planet} /> : null;

    return (
      <div className="randomPlanet-wrapper">
        <div className="card card2 border-dark d-flex">
          {errs}

          {loadings}

          {planets}
        </div>
      </div>
    );
  }
}

const PlanetError = () => {
  return (
    <>
      <div className="planetError-wrapper">
        <div>
          <img src={icon} alt="icon" />
        </div>
        <div>
          Что то пошло не так, возможно в следующий раз получиться загрузить
          панету!
        </div>
      </div>
    </>
  );
};

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  const imges = (
    <img
      src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      alt="Foto"
    />
  );

  return (
    <>
      <div className="randomPlanet-icon">{imges}</div>
      <div className="randomPlanet-card ">
        <h4 className="randomPlanet-title card-title">{name}</h4>
        <ul>
          <li className="randomPlanet-list">
            <span className="randomPlanet-list__span">Население: </span>
            <span className="randomPlanet-list__span-strong">
              {" "}
              {population}{" "}
            </span>
          </li>
          <li className="randomPlanet-list">
            <span className="randomPlanet-list__span">Период вращения: </span>
            <span className="randomPlanet-list__span-strong">
              {" "}
              {rotationPeriod} дня
            </span>
          </li>
          <li className="randomPlanet-list">
            <span className="randomPlanet-list__span">Диаметр: </span>
            <span className="randomPlanet-list__span-strong">
              {" "}
              {diameter} km
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};
