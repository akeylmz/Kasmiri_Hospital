import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate()
  return (
    <div className='w-screen h-screen relative'>
        <img className='w-full h-full object-cover' src="/img/login-bg.jpg" alt="" />
        <div className='absolute top-2/4 left-2/4 flex flex-col p-4 border border-white/80 items-center justify-evenly bg-white/70 w-[400px] h-[500px] rounded-xl shadow-lg z-30 -translate-x-2/4 -translate-y-2/4'>
            <h1 className='text-3xl text-cyan-600 -tracking-tighter font-semibold'>LOGİN</h1>
            <div className='flex flex-col gap-6 w-[80%] mt-12 h-[60%]'>
                <div className='flex flex-col gap-1 '>
                    <label className='text-cyan-600 ml-3' htmlFor="username">Kullanıcı Adı</label>
                    <input 
                        className='bg-white/80 w-full outline-none px-4 py-2 rounded-full text-gray-700 shadow-md border border-gray-200'
                        id='username' name='username' type="text" placeholder='Username'
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-cyan-600 ml-3' htmlFor="password">Şifre</label>
                    <input
                        className='bg-white/80 w-full outline-none px-4 py-2 rounded-full text-gray-700 shadow-md border border-gray-200'
                        id='password' name='password' type="password" placeholder='Password' 
                    />
                </div>
                <button
                    onClick={()=> navigate("/patients")}
                    className='bg-cyan-600 mt-10 w-full text-white text-lg font-semibold px-7 py-2 rounded-full '>Giriş Yap</button>
            </div>
        </div>
    </div>
  )
}

export default LoginPage