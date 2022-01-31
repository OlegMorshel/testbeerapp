import Header from "./components/Header/Header.jsx";
import Content from "./components/Content/Content.jsx";

import "./scss/styles/App.css";


function App(props) {
  if (!props.loading) {
    return (
      <div className="App">
        <Header email={props.user.email} />
        <Content
          userId={props.user.id}
          first_name={props.user.first_name}
          last_name={props.user.last_name}
          username={props.user.username}
          avatar={props.user.avatar}
          date_of_birthday={props.user.date_of_birthday}
          country={props.user.country}
          state={props.user.state}
          city={props.user.city}
          beerId={props.beer.id}
          brand={props.beer.brand}
          name={props.beer.name}
          style={props.beer.style}
          hop={props.beer.hop}
          yeast={props.beer.yeast}
          malts={props.beer.malts}
          ibu={props.beer.ibu}
          alcohol={props.beer.alcohol}
          blg={props.beer.blg}
        />
      </div>
    );
  } else {
    return <img className="app__loading" alt="loading" src="https://i.stack.imgur.com/ATB3o.gif" />;
  }
}

export default App;
