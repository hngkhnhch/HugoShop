import React from 'react'
import { Spin } from 'antd';

const Loading = ({ children, isLoading, delay = 200 }) => {
    return (
        <div>
            <Spin
                spinning={isLoading}
                delay={delay}>
                {children}
            </Spin>
        </div>
    )
}

export default Loading