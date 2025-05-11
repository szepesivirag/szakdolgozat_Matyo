import React, { useEffect, useRef, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Events() {
    const [events, setEvents] = useState([]);
    const isLoading = useRef(true);
    const isError = useRef(false);

    useEffect(() => {
        axios.get('/api/events')
            .then(res => {
                setEvents(res.data);
                isError.current = true;
                isLoading.current = false;
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <Container className="my-5">
            <h2>Események</h2>
            <Row>
                {!isLoading.current && !isError.current && events.map(event => (
                    <Col md={4} key={event._id} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={event.image || '/event-placeholder.jpg'} />
                            <Card.Body>
                                <Card.Title>{event.title}</Card.Title>
                                <Card.Text>{event.description}</Card.Text>
                                <p><strong>Dátum:</strong> {new Date(event.date).toLocaleDateString()}</p>
                                <p><strong>Helyszín:</strong> {event.location}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Events;