
import ItemList from "../ItemList/ItemList";
import PlanetDeteils from "../PalnetDeteils/PlanetDeteils";
import "./PlanetPage.css";

function PlanetPage(props) {
  return (
    <div className="planetPage-wrapper">
      <ItemList 
          OnItemSelected={props.OnItemSelected}
          idPlanet={props.idPlanet}
          getData={props.getData}
          renderItem={(item)=>`${item.name}`}
        />
        <PlanetDeteils 
          idPlanet={props.idPlanet}
          />
    </div>
  );
}

export default PlanetPage;
