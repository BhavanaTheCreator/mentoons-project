import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

function NoPage() {
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=> {navigate('/'), 2000})
  },[]);
  return (
    <div>NoPage</div>
  )
}

export default NoPage