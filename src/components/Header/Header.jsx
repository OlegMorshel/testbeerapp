import React from "react";

import './../../scss/styles/Header.scss';


const Header = ( props ) => {
	return (<header className='header'>
		<div className='header__container container'>
			<div className='header__email'>
				{props.email}
			</div>
		</div>
	</header>)
}

export default Header;