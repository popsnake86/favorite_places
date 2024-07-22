import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";

export default function AddPlace({ navigation }) {
  function createPlaceHandler(place) {
    insertPlace(place)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
    navigation.navigate("AllPlaces");
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}
