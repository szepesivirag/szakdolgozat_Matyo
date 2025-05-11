import React from 'react';
import { Card } from 'react-bootstrap';

function BlogCard() {
    return (
        <Card>
            <Card.Img variant="top" src="/hero.jpg" />
            <Card.Body>
                <Card.Title>Cikk címe</Card.Title>
                <Card.Text>Ez egy rövid leírás a blogcikkhez.</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default BlogCard;