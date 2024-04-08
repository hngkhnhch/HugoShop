import React, { Fragment, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { useQuery } from '@tanstack/react-query'

function App() {

  // useEffect(() => {
  //   fetchApi();
  // }, [])

  // const fetchApi = async () => {
  //   //const res = await axios.get(`http://localhost:3001/api/product/get-allproduct`)
  //   const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-allproduct`)
  //   return res.data

  //   console.log('res', res)
  // }
  
  // const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })

  // console.log('query', query)


  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const Layout = route.isShowHeader ? DefaultComponent : Fragment
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                <Page />
                </Layout>
              } />
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}
  
export default App