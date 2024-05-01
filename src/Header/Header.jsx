import React from 'react'
import "./styleHeader.css"
import Bucket from './Bucket'
function Header({data}) {
const handele = () =>{
  console.log(data)
}
  return (
    <>
    <ul className='header'>
      <li>Home</li>
      <li>Menu</li>
      <li>Services</li>
      <li>Blog</li>
      <li><Bucket data={data}/></li>
    </ul>
    </>
  )
}
export default Header