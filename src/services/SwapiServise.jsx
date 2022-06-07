export default class SwapiServise {
  _apiBase = "https://swapi.dev/api/";

 getResoult =  async (url) => {
    let res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error("Нет такой сущьности!", res.status);
    }
    return await res.json();
  }

  getAllPeople = async () => {
    let res = await this.getResoult(`people/`);
    return res.results.map(this._transformPerson);
  }

  getPerson= async (id) => {
    let person = await this.getResoult(`people/${id}`);
    return this._transformPerson(person);
  }

  getAllPlanets = async () => {
    let res = await this.getResoult(`planets/`);
    return res.results.map(this._transformPlanet);
  }

  getPlanets = async (id) => {
    let planet = await this.getResoult(`planets/${id}`);
    
    return this._transformPlanet(planet);
  }

 getAllStarships = async () => {
    let res = await this.getResoult(`starships/`);
    return res.results.map(this._transformStarship);
  }

 getStarships =  async (id) => {
    let starship = await this.getResoult(`starships/${id}`);
    return this._transformStarship(starship);
  }

  _extractId = (planet) => {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = planet.url.match(idRegExp)[1];
    return id;
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model, 
      manufacture:starship.manufacture,
      constInCredits:starship.constInCredits,
      length:starship.length,
      crew:starship.crew,
      passengers:starship.passengers,
      cargoCapacity:starship.cargoCapacity
    };
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender:person.gender,
      birthYear:person.birth_year,
      eyeColor:person.eye_color,
      hairColor:person.hair_color,
      mass:person.mass  
    };
  }
}
