import axios from "axios";
import React, { useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepickercss.css";



function AddCitoyen() {
  let history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [citoyen, setcitoyen] = useState({
    nom: "",
    prenom: "",
    datenaissance: "",
    localite: "",
    nationalite: "",
    pays: "",
    codepostal: "",
    adresse: "",
  });
  const onInputChange = (e) => {
    setcitoyen({ ...citoyen, [e.target.name]: e.target.value });
  };
  const { nom, prenom, datenaissance, localite, nationalite, pays, codepostal, adresse } = citoyen;
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(citoyen);
    let res = await axios.post("http://188.166.147.185:8080/CitoyenServiceREST/webresources/jpa.citoyen/createCriteriaJSON", citoyen);
    console.log(res);
    history.push("/");
  };
 const test=(e,date)=>{
      console.log(e)
      console.log(date)
      setStartDate(date)
  };

  return (
    <div className="container">
            <h2>Ajouter citoyen</h2>
      <Form onSubmit={(e) => onSubmit(e)}>
        <FormGroup>
          <label>Nom</label>
          <Input type="text" placeholder="Entrer le nom" name="nom" value={nom} onChange={(e) => onInputChange(e)}></Input>
        </FormGroup>
        <FormGroup>
          <label>Prenom</label>
          <Input type="text" placeholder="Entrer le prenom" name="prenom" value={prenom} onChange={(e) => onInputChange(e)}></Input>
        </FormGroup>
        <FormGroup>
          <label>datenaissance</label>
          <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
    />
        </FormGroup>
        <FormGroup>
          <label>localite</label>
          <Input type="text" placeholder="Entrer localite" name="localite" value={localite} onChange={(e) => onInputChange(e)}></Input>
        </FormGroup>
        <FormGroup>
          <label>nationalite</label>
          <Input type="text" placeholder="Entrer nationalite" name="nationalite" value={nationalite} onChange={(e) => onInputChange(e)}></Input>
        </FormGroup>
        <FormGroup>
          <label>pays</label>
          <Input type="text" placeholder="Entrer pays" name="pays" value={pays} onChange={(e) => onInputChange(e)}></Input>
        </FormGroup>
        <FormGroup>
          <label>codepostal</label>
          <Input type="text" placeholder="Entrer codepostal" name="codepostal" value={codepostal} onChange={(e) => onInputChange(e)}></Input>
        </FormGroup>
        <FormGroup>
          <label>adresse</label>
          <Input type="text" placeholder="Entrer adresse" name="adresse" value={adresse} onChange={(e) => onInputChange(e)}></Input>
        </FormGroup>
        <button className="btn btn-primary btn-block">Ajouter Citoyen</button>
      </Form>
    </div>
  );
}

export default AddCitoyen;
