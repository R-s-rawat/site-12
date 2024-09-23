import React from 'react'
import logo from '../../images/logo.png'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.container} >
        <img src={logo} />
        <ul>
            <li>Home</li>
            <li>Rentals</li>
            <li>Categories</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>
    </div>
  )
}
