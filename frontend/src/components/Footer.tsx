import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-light text-center py-3 mt-4">
            <Container>
                <small>&copy; {new Date().getFullYear()} Matyó Egyesület</small>
            </Container>
        </footer>
    );
}

export default Footer;