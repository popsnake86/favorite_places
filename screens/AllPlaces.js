import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../util/database";

export default function AllPlaces() {
  const isFocused = useIsFocused();

  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useEffect(() => {
    if (isFocused) {
      fetchPlaces()
        .then((places) => {
          setLoadedPlaces(places);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
}
