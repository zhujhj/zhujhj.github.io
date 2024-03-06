import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center text-black text-sm justify-center bg-gray-500 py-3 backdrop-filter:blur(10px)">
        <p>© {new Date().getFullYear()} Jason Zhu. All rights reserved.</p>
    </footer>
  )
}

export default Footer