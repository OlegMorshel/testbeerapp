import React from "react";

import './Profile.scss';

const Profile = () => {
	return (<div className='profile'>
		<div className='profile__wrapper container'>
			<div className='profile__section'>
				<div className='profile__avatar'>
					<img alt='avatar' scr='#'/>
				</div>
				<div className='profile__avatardata'>
					<ul className='profile__list'>
						<li className='profile__avatar-item'>Name</li>
						<li className='profile__avatar-item'>Surname</li>
					</ul>
				</div>
			</div>
			<div className='profile__section'>
				<ul className='profile__profiledata'>
					<li className='profile__profiledata-item'>Yout user name: user name</li>
					<li className='profile__profiledata-item'>Date of birthday: 10.02.2002</li>
					<li className='profile__profiledata-item'>You are from: country, state, city</li>
				</ul>
			</div>
		</div>
	</div>)
}

export default Profile;