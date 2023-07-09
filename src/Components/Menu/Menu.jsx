import React from 'react'
import { Link,NavLink} from 'react-router-dom'
import HomeContain from '../HomeContain/HomeContain'
// import pic1 from '../../Images/pic1.jpg'
import pic2 from '../../Images/pic2.jpg'
const Menu = () => {
  return (
    <div>
      <div className="menu-container">
					<div className="menu-pic-container">
						<img
							src={pic2}
							alt="peppe pic"
							width="100em"
							height="100em"
						/>
					</div>
					<div className="menu-menu-container">
					<Link to="/">HOME</Link>
						<Link to="">PAGES</Link>
						<NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : '#c84d28' })}>
                            MENU
                        </NavLink>
						<Link to="">EVENTS</Link>
						<Link to="">BLOG</Link>
						<Link to="">LANDING</Link>
					</div>
					<div className="menu-social-container">
						
						<div className="order-button">
							<Link to="/orderpage">
								<button>Order Now</button>
							</Link>
						</div>
					</div>
				</div>
                <div className='menu-container-details'>
                    <h2>Choose Your Favourite </h2>
                    <h1>MENU LIGHT</h1>
                </div>
                <div className='menu-item'>
				<HomeContain/>
			 </div>

    </div>
  )
}

export default Menu
