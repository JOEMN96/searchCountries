import React, { useContext, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import SingleCard from "./SingleCard";
import { store } from "./Store";
import axios from "axios";

let url = "https://restcountries.eu/rest/v2/name/";

function CardSecContainer() {
  let { state } = useContext(store);
  const [data, setdata] = useState([]);
  const [setERr, setsetERr] = useState(false);

  useEffect(() => {
    axios
      .get(url + state.value)
      .then(function (response) {
        setdata(response.data);
      })
      .catch(function (error) {
        setdata(["error"]);
      });
  }, [state]);

  return (
    <Grid className="grid" container>
      {data.length &&
        data.map((country, index) => {
          if (country == "error") {
            return (
              <h1 className="center" key={index}>
                Enter a Country Name !
              </h1>
            );
          }

          return (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <SingleCard className="singleCard" {...country} />
            </Grid>
          );
        })}
    </Grid>
  );
}

export default CardSecContainer;
