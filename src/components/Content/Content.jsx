import React from "react";
import Beer from "./Beer/Beer";
import Profile from "./Profile/Profile";

const Content  = ( props ) => {
	return (
    <>
      <Profile
        userId={props.userId}
        first_name={props.first_name}
        last_name={props.last_name}
        username={props.username}
        avatar={props.avatar}
        date_of_birthday={props.date_of_birthday}
				country={props.country}
				// state={props.state}
				city={props.city} 
      />
      <Beer beerId={props.beerId}
				brand={props.brand}
				name={props.name}
				style={props.style}
				hop={props.hop}
				yeast={props.yeast}
				malts={props.malts}
				ibu={props.ibu}
				alcohol={props.alcohol}
				blg={props.blg}
			/>
    </>
  );
}

export default Content