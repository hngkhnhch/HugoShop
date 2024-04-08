import React from 'react'
import './HomePage.css'
import { Carousel, Card, Image, Button, Row, Col } from 'antd'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'

const { Meta } = Card;

const HomePage = () => {
    const arr = ['Iphone', 'Laptop', 'Infinix']
    return (
        <div className='homepage-container'>
            <div className='navbar-product'>
                <div className='type-product'>
                    {arr.map((item) => {
                        return (
                            < TypeProduct name={item} key={item} />
                        )
                    })}
                </div>
            </div>
            <div className='container'>
                <div className='carousel-container'>
                    <Carousel
                        autoplay
                        autoplaySpeed={2000}
                        className='carousel'>
                        <div>
                            <img className='img-bg' src={require('../../assets/background-1.jpg')} />
                        </div>
                        <div>
                            <img className='img-bg' src={require('../../assets/background-2.jpg')} />
                        </div>
                        <div>
                            <img className='img-bg' src={require('../../assets/background-3.jpg')} />
                        </div>
                        <div>
                            <img className='img-bg' src={require('../../assets/background-4.jpg')} />
                        </div>
                        <div>
                            <img className='img-bg' src={require('../../assets/background-5.jpg')} />
                        </div>
                    </Carousel>
                </div>
                <Row className='card-product'>
                    <Col span={4} className='col'>
                        <CardComponent />
                    </Col>
                    <Col span={4} className='col'>
                        <CardComponent />
                    </Col>
                    <Col span={4} className='col'>
                        <CardComponent />
                    </Col>
                    <Col span={4} className='col'>
                        <CardComponent />
                    </Col>
                    <Col span={4} className='col'>
                        <CardComponent />
                    </Col>
                    <Col span={4} className='col'>
                        <CardComponent />
                    </Col>
                    <Col span={4} className='col'>
                        <CardComponent />
                    </Col>

                </Row>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button style={{ width: '240px', height: '40px' }} type='primary'>Xem thêm</Button>
                </div>

            </div>
        </div>
    )
}

export default HomePage