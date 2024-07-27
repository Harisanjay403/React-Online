import React from 'react'
import { Link} from 'react-router-dom'

export const Header = () => {
  return (
    <>
        <div className="logo">Food Cart</div>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/cart"}>View Cart</Link>
            </li>
        </ul>
    </>
    

    
  )
}

