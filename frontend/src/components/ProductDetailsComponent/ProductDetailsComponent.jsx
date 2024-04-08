
import { Row, Col, Image, Rate, InputNumber, Button } from 'antd'
import { MinusOutlined, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import React from 'react'
import product from '../../assets/product.jpg'
import './ProductDetailsComponent.css'

const ProductDetailsComponent = () => {
    return (
        <div>
            <Row style={{ padding: '15px' }}>
                <Col span={10}>
                    <div>
                        <Image src={product} />
                        <Row className='abc' >
                            <Col span={4}>
                                <Image src={product} preview={false} />
                            </Col>
                            <Col span={4}>
                                <Image src={product} preview={false} />
                            </Col>
                            <Col span={4}>
                                <Image src={product} preview={false} />
                            </Col>
                            <Col span={4}>
                                <Image src={product} preview={false} />
                            </Col>
                            <Col span={4}>
                                <Image src={product} preview={false} />
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col span={14} style={{ paddingLeft: '30px' }}>
                    <div></div>
                    <div className='productdetails-name'>Product.type - Product.name</div>
                    <div style={{ marginTop: '20px' }}>
                        <Rate disabled defaultValue={5} style={{ fontSize: '15px' }} />
                        <span className='productdetails-soldout'> | Đã bán 927</span>
                    </div>
                    <div className='productdetails-price'>200.000 ₫</div>
                    <div className='productdetails-address'>
                        <span>Giao đến </span>
                        <span className='address'>TP Thanh Hóa</span> -
                        <span className='change-address'> Đổi địa chỉ</span>
                    </div>
                    <div className='productdetails-quantity'>
                        <span>Số lượng</span>
                        <div style={{ marginTop: '10px' }}>
                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
                                <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                            </button>
                            <InputNumber controls={false} className='quantity' defaultValue={1} min={1} size="small" />
                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
                                <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                            </button>
                        </div>
                    </div>
                    <div className='productdetails-button-action'>
                        <Button className='button-addtocart'>
                            <ShoppingCartOutlined />Thêm vào giỏ hàng
                        </Button>
                        <Button className='button'>Mua ngay</Button>
                    </div>

                </Col>
            </Row>
        </div>
    )
}

export default ProductDetailsComponent