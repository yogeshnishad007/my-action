
import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (
    <div style={{display:"flex", gap:"20px"}}>
    <Link href="/">Home</Link>
   <Link href="/counter">Counter</Link>

    </div>
  )
}

export default Navbar