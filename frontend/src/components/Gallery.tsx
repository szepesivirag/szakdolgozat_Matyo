import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function Gallery() {
    const images = ['/hero.jpg', '/hero.jpg', '/hero.jpg', '/hero.jpg', '/hero.jpg', '/hero.jpg',];

    return (
        <Row>
            {images.map((src, index) => (
                <Col key={index} md={4} className="mb-3">
                    <Image src={src} fluid rounded />
                </Col>
            ))}
        </Row>
    );
}

export default Gallery;