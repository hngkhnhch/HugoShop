import React from 'react'
import { Checkbox, Rate, Button, Input } from 'antd'
import './NavBarComponent.css';

const NavBarComponent = () => {

    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <div className='navbar-text'>{option}</div>
                    )
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {options.map((option) => {
                            return (
                                <Checkbox style={{ marginLeft: 0 }} value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )
            case 'star':
                return options.map((option) => {
                    return (
                        <div style={{ dispaly: 'flex' }}>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                            <span> {`từ ${option} sao`}</span>
                        </div>
                    )
                })
            case 'price':
                return (
                    <div>
                        <Input type='number' placeholder='₫ Từ' style={{ width: '100px'}}/> - <Input type='number' placeholder='₫ Đến' style={{ width: '100px'}} />
                       <div>
                       <Button>Áp dụng</Button>
                       </div>
                    </div>
                )
            default:
                return {}
        }
    }
    return (
        <div>
            <h4 className='navbar-title'>Danh mục sản phẩm</h4>

            <div className='navbar-content'>
                {renderContent('text', ['Iphone', 'Samsung', 'Oppo'])}
                {renderContent('checkbox', [
                    { value: 'a', label: 'A' },
                    { value: 'b', label: 'B' }
                ])}
                {renderContent('star', [5, 4, 3])}
                {renderContent('price')}
            </div>


        </div>
    )
}

export default NavBarComponent