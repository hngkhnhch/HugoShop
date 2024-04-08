import { Card } from 'antd'
import React from 'react'
import './CardComponent.css'
import logo from '../../assets/logo.png'

const CardComponent = () => {
    return (
        <Card
            className='card'
            hoverable
            style={{ width: 264 }}
            cover={<img className='product-image' alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <img className='product-tag' src={logo} />
            <div className='product-name'>Product.name</div>
            <div className='product-rating'>
                <span>4.5 ⭐ </span>
                <span> | Đã bán 1000+ </span>

            </div>
            <div className='product-price'>
                <span className='original-price'>
                    ₫100.000
                </span>
                <span className='discount-price'>
                    -10%
                </span>
            </div>
        </Card>

    )
}

export default CardComponent