import ItemList from "../ItemList/ItemList";
import StarshipDeteils from "../StarshipDeteils/StarshipDeteils";
import "./StarshipPage.css";


function StarshipPage(props) {
  return (
    <div className="starshipPage-wrapper">
      <ItemList 
          OnItemSelected={props.OnItemSelected}
          idStarship={props.idStarship}
          getData={props.getData}
          renderItem={(item)=>`${item.name}`}
        />
        <StarshipDeteils
          idStarship={props.idStarship}
          />
    </div>
  );
}

export default StarshipPage;
