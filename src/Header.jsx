import React, { useEffect, useState } from 'react'

const Header = () => {
  const[url,setUrl] = useState('NA')
  useEffect(()=>{
    const cu = window.location.href
    setUrl(cu);
  },[])
  return (<>

  <h2>Collaborative Code Editor</h2>
  <p>Collab made easy </p>  
   share this url : {url}
  
  
  </>
   
  )
}

export default Header