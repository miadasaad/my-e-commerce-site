import React, { Component } from 'react'
import blog1 from './images/blog1.jpg'
import blog2 from './images/blog2.jpg'
import blog3 from './images/blog3.jpg'
import blog4 from './images/blog4.jpg'
import {Container,Row,Col} from 'react-bootstrap'
import "./styles.css";





export class LastBlog extends Component {
    state = {
        Blogs: [{
            url: blog4,
            name: 'Lorem impsum amet prod',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting i...'
        },
        {
            url: blog2,
            name: 'Lorem impsum amet prod',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting i...'
        },
        {
            url: blog3,
            name: 'Lorem impsum amet prod',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting i...'
        },
        {
            url: blog1,
            name: 'Lorem impsum amet prod',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting i...'
        },
    
        ]
    }

    render() {
        return (
            <div className='Blogs'>
                <h3 className='heading'>latest blogs</h3>
                <Container fluid>
                    <Row>
                    {this.state.Blogs.map((blog, index) => {
                        return <Col md={6} lg={3} key={index}>
                            <div className='card-content'>
                                <div className='banner-image'>
                                    <img className='btn-slide-up' src={blog.url} alt='blog' />
                                </div>
                                <div className='details'>
                                    <p>{blog.name}</p>
                                    <span>{blog.description}</span>
                                    <span style={{ display: "block" }}>read more...</span>
                                </div>
                            </div>
                        </Col>
                                   })}
                    </Row>
                </Container>
                
            </div>
        )
    }
}

export default LastBlog
