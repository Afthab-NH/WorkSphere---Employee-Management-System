import React from 'react'
import LoginLeftside from './LoginLeftside'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from 'lucide-react'


const LoginForm = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <LoginLeftside />
      <div className='w-full max-w-md animate-fade-in'>
          <Link>
          <ArrowLeftIcon />
          </Link>
      </div>
    </div>
  )
}

export default LoginForm
