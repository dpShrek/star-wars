import React, { Component } from "react";
import SwapiServise from "../../services/SwapiServise";
import Spinner from "../../spinner/Spinner";
import "./PersonDeteils.css";

export default class PersonDeteils extends Component {
  swapi = new SwapiServise();

  state = {
    person: {},
    loading: true,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.idPerson !== prevProps.idPerson) {
      this.setState({ loading: true });
      this.updatePerson();
    }
  }

  onPersonLoded = (person) => {
    this.setState({ person, loading: false });
  };

  updatePerson() {
    let id = this.props.idPerson;
    if (!id) {
      return;
    }
    this.swapi.getPerson(id).then(this.onPersonLoded);
  }

  render() {
    const { person, loading } = this.state;

    if (loading) {
      return (
          <Spinner />
      );
    }

    return (
      <div className="personDeteils-wrapper">
        <div className="card border-dark d-flex">
          <PersonView person={person} />
        </div>
      </div>
    );
  }
}

const PersonView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor, hairColor, mass } = person;

  return (
    <>
      <div className="personDeteils-icon">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="Foto"
        />
      </div>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">Год рождения: {birthYear}</p>
        <p className="card-text">Пол: {gender}</p>
        <p className="card-text">Вес: {mass} кг</p>
        <p className="card-text">Цвет глаз: {eyeColor}</p>
        <p className="card-text">Цвет волос: {hairColor}</p>
      </div>
    </>
  );
};
