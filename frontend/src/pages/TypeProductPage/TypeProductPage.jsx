import React from 'react'
import { Row, Col, Pagination } from 'antd'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import './TypeProductPage.css'

const TypeProductPage = () => {
    return (
        <div>
            <Row style={{ padding: '0 120px', backgroundColor: '#efefef', flexWrap: 'nowrap', paddingTop: '30px' }}>
                <Col span={4} style={{ backgroundColor: '#fff', marginRight: '10px', padding: '10px', borderRadius: '5px', height: 'fit-content' }}>
                    <NavBarComponent />
                </Col>
                <Col span={20}>
                   <div className='typeproduct-content'> <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent /></div>
                    <div className='typeproduct-pagination'> 
                    <Pagination
                        defaultCurrent={3}
                        total={100}
                    />
                    </div>
                </Col>
               
            </Row>

        </div>
    )
}

export default TypeProductPage