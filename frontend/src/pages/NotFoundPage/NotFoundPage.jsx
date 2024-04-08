import { Button, Result } from 'antd'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  )
}

export default NotFoundPage