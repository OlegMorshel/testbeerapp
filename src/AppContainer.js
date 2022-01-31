import React, { useEffect, useState } from "react";
import App from "./App";

const AppContainer = () => {
  const [user, setUser] = useState({
    id: null,
    first_name: null,
    last_name: null,
    username: null,
    email: null,
    avatar: null,
    date_of_birthday: null,
    country: null,
    state: null,
    city: null,
  });

  const [beer, setBeer] = useState({
    id: null,
    brand: null,
    name: null,
    style: null,
    hop: null,
    yeast: null,
    malts: null,
    ibu: null,
    alcohol: null,
    blg: null,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    fetch("https://random-data-api.com/api/users/random_user")
      .then((d) => d.json())
      .then((d) => {
        setUser({
          ...user,
          id: d.id,
          first_name: d.first_name,
          last_name: d.last_name,
          username: d.username,
          email: d.email,
          avatar: d.avatar,
          date_of_birthday: d.date_of_birth,
          country: d.address.country,
          state: d.address.state,
          city: d.address.city,
        });
      });

    fetch("https://random-data-api.com/api/beer/random_beer")
      .then((d) => d.json())
      .then((d) => {
        setBeer({
          ...beer,
          id: d.id,
          brand: d.brand,
          name: d.name,
          style: d.style,
          hop: d.hop,
          yeast: d.yeast,
          malts: d.malts,
          ibu: d.ibu,
          alcohol: d.alcohol,
          blg: d.blg,
        });
        setLoading(false);
      });
  }

  return <App user={user} beer={beer} loading={loading} />;
};

export default AppContainer;
