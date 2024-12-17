'use client'
import '@/styles/login.css';

import { useRouter } from 'next/navigation';

function LoginPage() {
    const router = useRouter()
    const handleClick = () => {
        router.push('/login')
    }
  return (
    <div className="login-container">
    <button className="login-button" onClick={handleClick}>
      LOGIN
    </button>
  </div>
  )
}

export default LoginPage
