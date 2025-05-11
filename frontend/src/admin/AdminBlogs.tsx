import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';
import axios from 'axios';

function AdminBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [form, setForm] = useState({
        title: '', description: '', image: '', content: ''
    });

    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get('/api/blogs').then(res => setBlogs(res.data));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/blogs', form, {
            headers: { Authorization: `Bearer ${token}` }
        });
        window.location.reload();
    };

    return (
        <Container className="my-5">
            <h2>Blog kezelése</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2"><Form.Control placeholder="Cím" onChange={e => setForm({ ...form, title: e.target.value })} /></Form.Group>
                <Form.Group className="mb-2"><Form.Control placeholder="Leírás" onChange={e => setForm({ ...form, description: e.target.value })} /></Form.Group>
                <Form.Group className="mb-2"><Form.Control placeholder="Kép URL" onChange={e => setForm({ ...form, image: e.target.value })} /></Form.Group>
                <Form.Group className="mb-2"><Form.Control as="textarea" rows={4} placeholder="Tartalom" onChange={e => setForm({ ...form, content: e.target.value })} /></Form.Group>
                <Button type="submit">Blog létrehozása</Button>
            </Form>

            <Table striped bordered hover className="mt-4">
                <thead><tr><th>Cím</th><th>Leírás</th></tr></thead>
                <tbody>
                    {blogs.map(blog => (
                        <tr key={blog._id}>
                            <td>{blog.title}</td><td>{blog.description}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default AdminBlogs;