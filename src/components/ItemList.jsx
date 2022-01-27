import React from "react";
import Item from './Item';
import { Container, Row } from 'react-bootstrap';
import ItemCount from './ItemCount';



const ItemList = ({items}) => {   
    return(
        <Container>
            <h2>Juegos Switch</h2>
        <Row xs={6} md={4} className="g-4 mt-1">
           {items.map(item => { 
           return <Item key={item.name} item={item}/>})}      
            </Row>
        </Container>
    ) 
}

export default ItemList;