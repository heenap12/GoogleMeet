import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom' 

const Home = () => {
    let [val, setVal] = useState()
    const navigate = useNavigate()
    const joinRoom = useCallback(() => {
        navigate(`/room/${val}`)
    },[val,navigate])
  return (
      <div>
          <input type="text" placeholder='Enter your room code' onChange={e => setVal(e.target.value)} />
          <button onClick={joinRoom}>Join Room</button>
    </div>
  )
}
export default Home
