import { Component } from "react";
import Spinner from "../../spinner/Spinner";
import "./ItemList.css";

export default class ItemList extends Component {
  
  state = {
    itemList: null,
  };

  componentDidMount() {
    const {getData}= this.props;

    getData()
      .then((itemList) => {
      this.setState({ itemList });
    });
  }
  
  renderItem (arr) {
    return arr.map((item) => {
      const {id} = item;
      const label = this.props.renderItem(item);

      return (
        <li key={id} 
          className="list-group-item d-flex justify-content-between align-items-center"
          onClick={()=> this.props.OnItemSelected(id)}
         
         >
          <a href="#" className={`list-group-a`}> 
          
            {label}
          
          </a>
        </li>
      );
     });
  }

  render() {
    
    const  { itemList } = this.state;

    if (!itemList) {
      return <Spinner />
    }

    const item = this.renderItem(itemList);

    return (
      <div className="itemList-wrapper">
        <ul className="list-group">
          {item}
        </ul>
      </div>
    );
  }
}
