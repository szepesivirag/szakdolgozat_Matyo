import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Gallery from '../components/Gallery.tsx';
import BlogCard from '../components/BlogCard.tsx';

function Home() {
    return (
        <div>
            <div className="hero" style={{
                backgroundImage: 'url(/hero.jpg)',
                backgroundSize: 'cover',
                color: 'white',
                padding: '200px 20px',
                textAlign: 'center',
                textShadow: '1px 1px 3px #000',
                fontSize: '18px',
                fontWeight: 'bold'
            }}>
                <h1 style={{
                    fontSize: '58px',
                    fontWeight: '700'
                }}>Üdvözlünk a Matyó Egyesület oldalán</h1>
                <p>Kulturális közösség Mezőkövesdről</p>
            </div>

            <Container className="my-5">
                <h2>Galéria</h2>
                <Gallery />

                <div className="my-5 text-center">
                    <h2>Eseményeink</h2>
                    <Button href="/events">Események megtekintése</Button>
                </div>

                <div className="my-5">
                    <h3>Rólunk</h3>
                    <p>A Matyó Egyesület célja a népművészet megőrzése és közösségépítés.</p>
                </div>

                <div className="my-5">
                    <h3>Legfrissebb cikkek</h3>
                    <Row>
                        <Col><BlogCard /></Col>
                        <Col><BlogCard /></Col>
                        <Col><BlogCard /></Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Home