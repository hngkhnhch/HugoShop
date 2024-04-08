import { Button, Input } from 'antd'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutationHooks } from '../../hooks/useMutationHook'
import './LogInPage.css'
import * as UserService from '../../services/UserService'
import Loading from '../../components/LoadingComponent/Loading'
import * as message from '../../components/Message/Message'
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux'
import { updateUser } from '../../redux/slides/userSlide'

const LogInPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const mutation = useMutationHooks(
    data => UserService.loginUser(data)
  )

  const { data, isPending, isSuccess } = mutation

  useEffect(() => {
    if (isSuccess && data?.message === 'SUCCESS') {
        message.success();
        navigate('/');
        localStorage.setItem('access_token', data?.access_token);
        if (data?.access_token) {
            console.log('Access token received:', data.access_token);
            const decoded = jwtDecode(data?.access_token);
            console.log('Decoded token:', decoded);
            if (decoded?.id) {
                console.log('User ID:', decoded.id);
                console.log('Access token from decoded:', decoded.access_token);
                handleGetDetailsUser(decoded?.id, decoded?.access_token);
            }
        }
    }
}, [isSuccess]);


  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token)
    console.log('res', res)
    //dispatch(updateUser({ ...res?.data, access_token: token}))
  }

  const handleNavigateSignUp = () => {
    navigate('/sign-up')
  }

  const handleLogIn = () => {
    mutation.mutate({
      email,
      password
    })
  }

  return (
    <div className='login-form'>
      <div className='login' style={{ width: '600px', height: '440', padding: '50px' }}>
        <p className='p'>XIN CHÀO</p>

        <Input className='input' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input.Password className='input' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        {data?.status === 'ERR' && <span className='fail'>{data?.message}</span>}
        <Loading isLoading={isPending}>
          <Button className='button'
            disabled={!email.length || !password.length}
            onClick={handleLogIn}
            type='primary'>Đăng nhập
          </Button>
        </Loading>
        <p>Quên mật khẩu?</p>
        <p>Chưa có tài khoản? <span className='span' onClick={handleNavigateSignUp} style={{ cursor: 'pointer' }}>Tạo tài khoản</span></p>
      </div>
    </div>
  )
}

export default LogInPage