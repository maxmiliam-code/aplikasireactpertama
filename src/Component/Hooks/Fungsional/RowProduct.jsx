import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
  } from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../../CardContext';
function RowProduct() {
    const {value, setValue} = useContext(CartContext)
    return (
        <Col>
            <Card>
                <CardImg top width="100%" src="http://placeimg.com/640/480/tech" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Lenovo</CardTitle>
                    <CardSubtitle>Rp. 12.000.000</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button onClick={()=>setValue(value+1)}>Tambah Keranjang</Button>
                </CardBody>
            </Card>
        </Col>
    );
};

export default RowProduct;