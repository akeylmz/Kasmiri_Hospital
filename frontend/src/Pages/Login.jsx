import React, { useState } from 'react'
import { AiOutlineUnlock } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const submitHandle = (e)=>{
    e.preventDefault()
    if (userName === 'admin' && password === '123') {
      navigate('/')
    } else {
      alert('Geçersiz kullanıcı adı veya şifre')
    }
  }

  return (
    <div className='text-white relative h-[100vh] flex justify-center items-center bg-cover' style={{"background": "url('./images/login.jpg') no-repeat center center/cover"}}>      
        <div className='w-full h-full absolute' style={{ backdropFilter: "blur(1px)" }}></div>
        <div>
          <div className='bg-slate-900 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
            <h1 className='text-4xl text-white font-bold text-center mb-6'>Giriş Yap</h1>
            <form action="" onSubmit={submitHandle}>
              <div className='relative my-4'>
                <input 
                  onChange={(e)=>setUserName(e.target.value)}
                  value={userName}
                  placeholder='' type="text" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' />
                <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Kullanıcı Adı</label>
                <BiUser className='absolute top-4 right-1' />
              </div>
              <div className='relative my-4'>
                <input 
                  onChange={(e)=>setPassword(e.target.value)}
                  value={password}
                  placeholder='' type="password" className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' />
                <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Parola</label> 
                <AiOutlineUnlock className='absolute top-4 right-1' />
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                  <input type="checkbox" />
                  <label htmlFor="">Beni Hatırla</label>                 
                </div>
                <Link to='' className='text-blue-700'>Şifremi Unuttum?</Link>
              </div>
              <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300' type='submit'>Giriş</button>
              <span className='m-4'>Yeni Misin? <Link className='text-blue-700' to='Register'>Hesap Oluştur</Link></span>
            </form>
          </div>
        </div>
    </div>
  )
}

export default LoginPage