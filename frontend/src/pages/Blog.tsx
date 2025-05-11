import React, { useEffect, useRef, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Blog() {
    const [blogs, setBlogs] = useState([]);
    const isLoading = useRef(true);
    const isError = useRef(false);

    useEffect(() => {
        axios.get('/api/blogs')
            .then(res => {
                setBlogs(res.data);
                isError.current = true;
                isLoading.current = false;
            })
            .catch(err => isError.current = true);
    }, []);

    return (
        <Container className="my-5">
            <h2>Blog</h2>
            <Row>
                {!isLoading.current && !isError.current && blogs.map(blog => (
                    <Col md={4} key={blog._id} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={blog.image || '/blog-placeholder.jpg'} />
                            <Card.Body>
                                <Card.Title>{blog.title}</Card.Title>
                                <Card.Text>{blog.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Blog;