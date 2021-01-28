import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom'
import { ListGroup, ListGroupItem, Button } from "reactstrap";

function DataFetching() {
  const [citoyens, setcitoyens] = useState([]);
  const renderHeader = () => {
    let headerElement = ["idcitoyen", "nom", "prenom", "nationalite", "adresse", "codepostal", "operation"];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };
  const renderBody = () => {
    return (
      citoyens &&
      citoyens.map(({ idcitoyen, nom, prenom, nationalite, adresse, codepostal }) => {
        return (
          <tr key={idcitoyen}>
            <td>{idcitoyen}</td>
            <td>{nom}</td>
            <td>{prenom}</td>
            <td>{nationalite}</td>
            <td>{adresse}</td>
            <td>{codepostal}</td>
            <td className="opration">
                <Link type="button" className="btn btn-sm btn-warning" style={{color:'white'}} to={`/edit/${idcitoyen}`}>Edit</Link>
                <button onClick={() => removeData(idcitoyen)}  type="button" className="btn btn-sm btn-danger" style={{marginLeft:'15px'}}>Delete</button>
            </td>
          </tr>
        );
      })
    );
  };
  const removeData = (idcitoyen) => {
    let url = `http://188.166.147.185:8080/CitoyenServiceREST/webresources/jpa.citoyen/${idcitoyen}`
    axios.delete(url).then(res => {
        const del = citoyens.filter(citoyen => idcitoyen !== citoyen.idcitoyen)
        setcitoyens(del)
        console.log('res', res)
    })
}
  useEffect(() => {
    axios
      .get("http://188.166.147.185:8080/CitoyenServiceREST/webresources/jpa.citoyen")
      .then((res) => {
        console.log(res);
        setcitoyens(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      
      <table id="citoyen" className=" table table-striped hover condensed table-bordered table-hover">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody className="text-center">{renderBody()}</tbody>
      </table>
    </div>
  );
}

export default DataFetching;
