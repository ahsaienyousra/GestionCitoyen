import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { Form, FormGroup, Input } from 'reactstrap'
import {useHistory, useParams} from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepickercss.css";


function EditCitoyen() {
    let history = useHistory();
    const {idcitoyen}=useParams();
    const [startDate, setStartDate] = useState(new Date());
    const [citoyen, setcitoyen]=useState({
        nom:"",
        prenom:"",
        datenaissance:new Date(),
        localite:"",
        nationalite:"",
        pays:"",
        codepostal:"",
        adresse:""
    })
    useEffect(()=>{
        loadCitoyen()
    },[])
    const onInputChange =e=>{
        setcitoyen({...citoyen,[e.target.name]:e.target.value })
    }
    const test =e=>{
        setcitoyen({...citoyen,["datenaissance"]:e})
        setStartDate(e)
        console.log(startDate)
    }
    const {nom, prenom, datenaissance, localite, nationalite,pays,codepostal,adresse}=citoyen;
    const onSubmit=async e=>{
        e.preventDefault()
        console.log(citoyen)
        await axios.put('http://188.166.147.185:8080/CitoyenServiceREST/webresources/jpa.citoyen/updateJPQLJSON',citoyen)
        history.push("/")
    }
    const loadCitoyen=async ()=>{
        const result= await axios.get(`http://188.166.147.185:8080/CitoyenServiceREST/webresources/jpa.citoyen/${idcitoyen}`)
        console.log(result)
        setcitoyen(result.data)
    }


    return (
        <div className="container">
            <h2>Modifier citoyen</h2>
            <Form onSubmit={e=>onSubmit(e)}>
                <FormGroup>
                    <label>Nom</label>
                    <Input type="text" placeholder="Entrer le nom"  name="nom" value={nom} onChange={e=>onInputChange(e)}></Input>
                </FormGroup>
                <FormGroup>
                    <label>Prenom</label>
                    <Input type="text" placeholder="Entrer le prenom"  name="prenom" value={prenom} onChange={e=>onInputChange(e)}></Input>
                </FormGroup>
                <FormGroup>
                    <label>datenaissance</label>
                    <DatePicker selected={citoyen.datenaissance} dateFormat='yyyy-MM-dd' name="datenaissance" onChange={date =>setcitoyen({...citoyen,["datenaissance"]:date})
} />
                    {/* <Input type="text" placeholder="Entrer la datenaissance" name="datenaissance" value={datenaissance} onChange={e=>onInputChange(e)}></Input> */}
                </FormGroup>
                <FormGroup>
                    <label>localite</label>
                    <Input type="text" placeholder="Entrer localite" name="localite" value={localite} onChange={e=>onInputChange(e)}></Input>
                </FormGroup>
                <FormGroup>
                    <label>nationalite</label>
                    <Input type="text" placeholder="Entrer nationalite" name="nationalite" value={nationalite} onChange={e=>onInputChange(e)}></Input>
                </FormGroup>
                <FormGroup>
                    <label>pays</label>
                    <Input type="text" placeholder="Entrer pays" name="pays" value={pays} onChange={e=>onInputChange(e)}></Input>
                </FormGroup>
                <FormGroup>
                    <label>codepostal</label>
                    <Input type="text" placeholder="Entrer codepostal" name="codepostal" value={codepostal} onChange={e=>onInputChange(e)}></Input>
                </FormGroup>
                <FormGroup>
                    <label>adresse</label>
                    <Input type="text" placeholder="Entrer adresse"  name="adresse" value={adresse} onChange={e=>onInputChange(e)}></Input>
                </FormGroup>
                <button className="btn btn-primary btn-block">Ajouter Citoyen</button>
            </Form>
        </div>
    )
}


export default EditCitoyen
