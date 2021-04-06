import React, { useState } from 'react'
import '../css/form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button, Container, Col, Row,Form } from 'react-bootstrap';
// import fetch from 'fetch'
import getNames from '../server/data'
import begin from '../server/data'
import myImg from './copy_983743913.jpg'

const FormComponent=()=>
{
  

   function componentDidMount(e) {
        // Simple POST request with a JSON body using fetch
        e.preventDefault()
        let elems=e.target.elements
        // url
        // alert(elems[0].value)
        // max pages
        // alert(elems[1].value)
        // max depth
        // alert(elems[2].value)
        
        // alert("You are submitting " + e.target.children.item(0));
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({url:elems[0].value,maxPages:elems[1].value,maxDepth:elems[2].value})
        };
        fetch('http://localhost:3000/', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    


    return(
<div>
  
    <div className='container-fluid bottomPage`'>
    <Container>
   <h3>
        <strong>Linkedin
            <img style={{width:'7%'}} src={myImg}></img>
        </strong>
    </h3>    
    <div className='topPage'>
    <form className='rainbow ' style={{maxWidth:'50%' ,margin:'0 auto',marginBottom:'0px',marginTop:'40px'}} onSubmit={componentDidMount}>

    <div className='form-group '>
    <label for='url'>URL</label>
    <input style={{width:'80%',margin:'0 auto'}} className='form-control' id='url' placeholder='/in/stefanhyltoft' type='text'/>
    <small id="emailHelp" className="form-text text-muted">Go crawl the web</small>
    </div>
<div className='form-row'>
    <div className='form-group col-md-6'>
    <label  for='max-pages'>max-pages</label>
    <input  style={{margin:'0 auto'}} className='form-control' type='text' id='max-pages'/>
    <small id="emailHelp" className="form-text text-muted">How low can you go?</small>
    </div>

    <div className='form-group col-md-6'>
    <label for='max-depth'>max-depth</label>
    <input style={{margin:'0 auto'}} className='form-control' id='max-depth' type='text'/>
    <small id="emailHelp" className="form-text text-muted">We will go to the dark net</small>
    </div>
</div>
    <button style={{paddingBottom:'30px'}} className='btn ' type='submit'>
    <section className="ss-icon">
        <a href="#"><article><span>linkedin</span></article></a>
    </section>
    </button>

    </form >
    </div>
    </Container>
    </div>
    
    <hr/>
    
</div>

    )
}


export default FormComponent