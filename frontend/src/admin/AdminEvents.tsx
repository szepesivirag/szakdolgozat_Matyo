import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';
import axios from 'axios';

function AdminEvents() {
    const [events, setEvents] = useState([]);
    const [form, setForm] = useState({
        title: '', description: '', date: '', location: '', image: ''
    });

    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get('/api/events').then(res => setEvents(res.data));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/events', form, {
            headers: { Authorization: `Bearer ${token}` }
        });
        window.location.reload();
    };

    return (
        <Container className="my-5">
            <h2>Események kezelése</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2"><Form.Control placeholder="Cím" onChange={e => setForm({ ...form, title: e.target.value })} /></Form.Group>
                <Form.Group className="mb-2"><Form.Control placeholder="Leírás" onChange={e => setForm({ ...form, description: e.target.value })} /></Form.Group>
                <Form.Group className="mb-2"><Form.Control type="date" onChange={e => setForm({ ...form, date: e.target.value })} /></Form.Group>
                <Form.Group className="mb-2"><Form.Control placeholder="Helyszín" onChange={e => setForm({ ...form, location: e.target.value })} /></Form.Group>
                <Form.Group className="mb-2"><Form.Control placeholder="Kép URL" onChange={e => setForm({ ...form, image: e.target.value })} /></Form.Group>
                <Button type="submit">Esemény létrehozása</Button>
            </Form>

            <Table striped bordered hover className="mt-4">
                <thead><tr><th>Cím</th><th>Dátum</th><th>Helyszín</th></tr></thead>
                <tbody>
                    {events.map(ev => (
                        <tr key={ev._id}>
                            <td>{ev.title}</td><td>{new Date(ev.date).toLocaleDateString()}</td><td>{ev.location}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default AdminEvents;