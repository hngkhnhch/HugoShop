import React from 'react'
import { Col, Row, Input, Badge } from 'antd';
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useNavigate  } from "react-router-dom";
import './HeaderComponent.css'


const { Search } = Input;

const HeaderComponent = () => {

    const navigate = useNavigate()
    const handleNavigateLogin = () => {
        navigate('/log-in')
    }

    return (
        <div className='header-component'>
            <Row className='header'>
                <Col span={6} className='left'>
                    HUGO SHOP
                </Col>
                <Col span={12} className='middle'>
                    <Search
                        placeholder="Nhập từ khóa tìm kiếm ..."
                        size="large"
                        enterButton
                    />
                </Col>
                <Col span={6} className='right'>
                    <div className='user-account' onClick={handleNavigateLogin}>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div>
                            <span className='user-account-span'>Đăng nhập/Đăng ký</span>
                            <div>
                                <span className='user-account-span'>Tài khoản</span>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </div>
                    <div className='user-shoppingcart'>
                        <Badge count={5} size='small'>
                            <ShoppingCartOutlined style={{ color: '#fff', fontSize: '30px' }} />
                        </Badge>
                        <span>Giỏ hàng</span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default HeaderComponent