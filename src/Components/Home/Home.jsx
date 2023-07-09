import React from 'react';

import { Link,NavLink } from 'react-router-dom';
import { TiTickOutline } from 'react-icons/ti';
import { BsFacebook } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import {
	AiFillTwitterCircle,
	AiFillInstagram,
	AiOutlineWhatsApp,
} from 'react-icons/ai';
import './Home.css';
import pic1 from '../../Images/pic1.jpg'
import pic2 from '../../Images/pic2.jpg'
import HomeContain from '../HomeContain/HomeContain';
const Home = () => {
	return (
		<>
			<div className="main-container">
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
					<NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? '#c84d28' : 'blue' })}>
                            HOME
                        </NavLink>
						<Link to="">PAGES</Link>
						<Link to="/menu">MENU</Link>
						<Link to="">EVENTS</Link>
						<Link to="">BLOG</Link>
						<Link to="">LANDING</Link>
					</div>
					<div className="menu-social-container">
						<div className="social">
							<a href="">
								<BsFacebook />
							</a>
							<a href="">
								<AiFillTwitterCircle />
							</a>
							<a href="">
								<AiFillInstagram />
							</a>
							<a href="">
								<AiOutlineWhatsApp />
							</a>
						</div>
						<div className="order-button">
							<Link to="/orderpage">
								<button>Order Now</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="pic-container">
					<div className="pic-left-container">
						<h1>DELIVERY TO THE DOORSTEPS</h1>
						<div className="heading">
							<TiTickOutline />
							<p>Choose Your Ingredients</p>
						</div>
						<div className="heading">
							<TiTickOutline />
							<p>Get free Delivery 24/7</p>
						</div>
						<div className="heading">
							<TiTickOutline />
							<p>Special Gift Coupans</p>
						</div>

						<input type="text" placeholder="Email" />
						<button>Subscribe</button>
						<div className="heading">
							<CiLocationOn />
							<p>Check your Delivery zone</p>
						</div>
					</div>
					<div className="pic-right-container">
						<img src={pic1} />
					</div>
				</div>
			</div>
             <div className='menu-item'>
				<HomeContain/>
			 </div>
			
		</>
	);
};
export default Home;
