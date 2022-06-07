import PersonDeteils from "../PersonDeteils/PersonDeteils";
import ItemList from "../ItemList/ItemList";
import "./PersonPage.css";

function PersonPage(props) {
  return (
    <div className="personPage-wrapper">
      <ItemList 
          OnItemSelected={props.OnItemSelected}
          idPerson={props.idPerson}
          getData={props.getData}
          renderItem={(item)=>`${item.name}`}
        />
        <PersonDeteils 
          idPerson={props.idPerson}
          />
    </div>
  );
}

export default PersonPage;
