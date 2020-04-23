import React, {
  Component
} from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import Pig from "./pig"
import Pigs from "./pigs"


class App extends Component {
  constructor(props) {
    super()
    const newhogs = Array.from(hogs);
    newhogs.forEach((hog,index) => {
      hog['indexKey'] = index;
      hog['detailShown'] = false;
    });
    this.state = {
      pigs: newhogs,
      unfilteredPigs: newhogs,
      greaseFilter: false,
    }
    this.sortByName = this.sortByName.bind(this);
    this.sortByWeight = this.sortByWeight.bind(this);
    this.filterPigs = this.filterPigs.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

  sortByName = () => {
    let sortedPigs = this.state.pigs;
    sortedPigs = sortedPigs.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({
      pigs: sortedPigs
    });
  }
  sortByWeight = () => {
    let sortedPigs = this.state.pigs;
    sortedPigs = sortedPigs.sort((a, b) => a.weight - b.weight);
    this.setState({
      pigs: sortedPigs
    });
  }

  filterPigs = () => {
    if(this.state.greaseFilter){
      this.setState({pigs: this.state.unfilteredPigs})
    }
    else {
      this.setState({
        pigs: this.state.unfilteredPigs.filter(pig => pig.greased),
      })
    }
    this.setState({greaseFilter: !this.state.greaseFilter});
  }

   showDetails = event => {
     event.preventDefault();
     const id = event.target.dataset.id;
      let newPigs = this.state.pigs;
      newPigs[id]['detailShown'] = !newPigs[id]['detailShown'];
      this.setState({pigs: newPigs});
     console.log(event.target.dataset.id);
   }


  render() {
    return ( <
      div className = "App" >
      <
      Nav sortByName = {
        this.sortByName
      }
      sortByWeight = {
        this.sortByWeight
      }
      filterPigs = {
        this.filterPigs
      }
      greaseFilter = {
        this.state.greaseFilter
      }
      /> <
      Pigs piggies = {
        this.state.pigs
      }
      showDetails={this.showDetails}
      /> <
      /div>
    );
  }
}

export default App;
