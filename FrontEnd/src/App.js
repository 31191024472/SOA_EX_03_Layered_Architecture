import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CarList from "./components/CarList";
import AddCar from "./components/AddCar";
import EditCar from "./components/EditCar";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h2 className="text-center">Quản lý danh sách xe</h2>
        <Switch>
          <Route exact path="/" component={CarList} />
          <Route path="/add" component={AddCar} />
          <Route path="/edit/:id" component={EditCar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
