import React, { Component } from 'react';
import Reboot from 'material-ui/Reboot';
import Navbar from './Component/Navbar';
import GridDefault from './Component/GridDefault';

class App extends Component {
  state = {
    openAddModal: false,
    selectedRows: [],
    columns: [
      { name: "name", title: "Name" },
      { name: "sex", title: "Sex" },
      { name: "city", title: "City" },
      { name: "car", title: "Car" }
    ],
    rows: [
      { sex: "Female", name: "Sandra", city: "Las Vegas", car: "Audi A4" },
      { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
      { sex: "Male", name: "Mark", city: "Paris", car: "Honda Accord" },
      { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
      { sex: "Female", name: "Linda", city: "Austin", car: "Toyota Corolla" },
      {
        sex: "Male",
        name: "Robert",
        city: "Las Vegas",
        car: "Chevrolet Cruze"
      },
      { sex: "Female", name: "Lisa", city: "London", car: "BMW 750" },
      { sex: "Male", name: "Mark", city: "Chicago", car: "Toyota Corolla" },
      {
        sex: "Male",
        name: "Thomas",
        city: "Rio de Janeiro",
        car: "Honda Accord"
      },
      { sex: "Male", name: "Robert", city: "Las Vegas", car: "Honda Civic" },
      { sex: "Female", name: "Betty", city: "Paris", car: "Honda Civic" },
      {
        sex: "Male",
        name: "Robert",
        city: "Los Angeles",
        car: "Honda Accord"
      },
      {
        sex: "Male",
        name: "William",
        city: "Los Angeles",
        car: "Honda Civic"
      },
      { sex: "Male", name: "Mark", city: "Austin", car: "Nissan Altima" }
    ]
  };
  handleShowAddModal = () => {
    const newV = this.state.openAddModal;
    this.setState({ openAddModal: !newV });
  }
  handleChangeSelection = (selection) => {
    this.setState({ selectedRows : selection});
  }
  render() {
    return (
      <div>
        <Reboot>
          <Navbar
            open={this.state.openAddModal}
            show={this.handleShowAddModal}
          />
        </Reboot>
        <div>
          <h3>Red Cloths</h3>
          <GridDefault
            rows={this.state.rows}
            columns={this.state.columns}
            changeSelection={this.handleChangeSelection}
          />
        </div>
      </div>
    );
  }
}

export default App;
