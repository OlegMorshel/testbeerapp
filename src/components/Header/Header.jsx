import React from "react";

import './Header.scss';


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