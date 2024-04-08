import { Button, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useMutationHooks } from '../../hooks/useMutationHook'
import * as UserService from '../../services/UserService'
import './SignUpPage.css'
import Loading from '../../components/LoadingComponent/Loading'
import * as message from '../../components/Message/Message'

const SignUpPage = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const mutation = useMutationHooks(
    data => UserService.signupUser(data)
  )
  const { data, isPending, isSuccess, isError } = mutation

  useEffect(() => {
    if (isSuccess) {
      message.success()
      handleNavigateLogIn()
    } else if (isError) {
      message.error()
    }
  }, [isSuccess, isError])

  const handleNavigateLogIn = () => {
    navigate('/log-in')
  }

  const handleSignUp = () => {
    mutation.mutate({
      email,
      password,
      confirmPassword
    })
    if (data && data.status === 'OK') {
      message.success('Đăng ký thành công!')
      handleNavigateLogIn()
    }
  }

  return (
    <div className='signup-form'>
      <div className='signup' style={{ width: '600px', height: '440', padding: '50px' }}>
        <p className='p'>TẠO TÀI KHOẢN</p>
        <Input className='input' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input.Password className='input' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input.Password className='input' type='password' placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        {data?.status === 'ERR' && <span className='fail'>{data?.message}</span>}
        <Loading isLoading={isPending}>
          <Button className='button'
            disabled={!email.length || !password.length || !confirmPassword.length}
            type='primary' onClick={handleSignUp}>Đăng ký</Button>
        </Loading>

        <p>Đã có tài khoản? <span className='span' onClick={handleNavigateLogIn} style={{ cursor: 'pointer' }}>Đăng nhập</span></p>
      </div>
    </div>
  )
}

export default SignUpPage