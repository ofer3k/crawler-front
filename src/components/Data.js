import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/data.css'
import { Card,Button, Container, Col, Row } from 'react-bootstrap';
// import '../css/data.css'
import getNames from '../server/data'
import getImages from '../server/data2'

const Data=()=>
{
    const [state, setState] = useState([]);
    const [images, setImages] = useState([]);
    let combine=[]
    let temp=[]
    useEffect(() => {
        const interval = setInterval(() => {
            getNames().then((res)=>{
                setState([...res.data])
                console.log(res.data)
                console.log(...state)
                 temp=[...state]
                // console.log(names)
            getImages().then((res)=>{
                setImages([...res.data])
            })
            for (let index = 0; index < state.length; index++) {
                combine.push(state[index])
                combine.push(images[index])
            }
            })
        }, 3000);
        return () => clearInterval(interval);
      }, [temp]);
let objList=[]
for (let index = 0; index < state.length; index++) {
    if(images.length>1&&index>1)
    {
    if(!images[index-1].includes('http')) images[index-1]='https://thumbs.dreamstime.com/b/no-user-profile-picture-hand-drawn-illustration-53840792.jpg'
    }
    let obj ={name:state[index],url:images[index]};
    objList.push(obj)
}
      
    return(
<div className='bottomPage'>
    <h1>Data:</h1>
<div className=''>
    <Container>
    <Row md={4}>
    {objList.map((obj)=>(<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={obj.url} />
  <Card.Body>
    <Card.Title>{obj.name}</Card.Title>
  </Card.Body>
</Card>))}
</Row>
</Container>
</div>

        
</div>
    )
}


export default Data