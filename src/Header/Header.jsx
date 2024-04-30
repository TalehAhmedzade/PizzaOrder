import React from 'react'
import "./styleHeader.css"
import Bucket from './Bucket'
function Header() {
  return (
    <>
    <ul className='header'>
      <li>Home</li>
      <li>Menu</li>
      <li>Services</li>
      <li>Blog</li>
      <li><Bucket/></li>
    </ul>
    </>
  )
}
export default Header