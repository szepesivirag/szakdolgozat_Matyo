import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <Container className="my-5">
            <h2>Admin Dashboard</h2>
            <Button variant="primary" onClick={() => navigate('/admin/events')} className="me-3">Események kezelése</Button>
            <Button variant="secondary" onClick={() => navigate('/admin/blogs')}>Blogok kezelése</Button>
            <hr />
            <Button variant="danger" onClick={logout}>Kijelentkezés</Button>
        </Container>
    );
}

export default Dashboard;