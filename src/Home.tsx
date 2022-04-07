import { useNavigate } from 'react-router-dom';

import Login from './assets/Login.svg';
import { signInWithPopup, getAuth } from "firebase/auth";
import { provider } from "./services/firebase";
import { useState } from 'react'

type userType = {
  name: string;
  email: string;
  avatar: string;
}

function Home() {
  const navi = useNavigate();
  function naviToMenu() {
    navi('/menu');
  }

  const [user, setUser] = useState<userType>();
  const [hidden, setHidden] = useState(true)

  const auth = getAuth();

  async function signIn() {
    const resp = await signInWithPopup(auth, provider);
    const { displayName, email, photoURL } = resp.user;
    if (displayName != null && email != null && photoURL != null) {
      setUser({
        name: displayName,
        email: email,
        avatar: photoURL
      })
      setHidden(false)
    }
  }

  return (
    <div className='borda'>
      <h1>Home</h1>
      <div className='home'>
        <p><span className='bold'>Nome do Usuário:</span> {user?.name || 'faça o login'}</p>
        <p><span className="bold">Email:</span> {user?.email || ''}</p>
        <div className='flex'>
          <img className='photo' src={user?.avatar || Login} />
          <button className={hidden ? '' : 'hidden'} onClick={signIn}>Logar</button>
          <button className={hidden ? 'hidden' : ''} onClick={naviToMenu}>Menu</button>
        </div>
      </div>
    </div>
  )
}

export default Home;
