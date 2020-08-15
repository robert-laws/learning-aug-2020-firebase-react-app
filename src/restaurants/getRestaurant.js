import firebase from 'firebase/app';

export const getRestaurant = async (id) => {
  const restaurantSnapshot = await firebase
    .firestore()
    .collection('restaurants')
    .doc(id)
    .get();

  const restaurant = restaurantSnapshot.data();

  return {
    ...restaurant,
    id,
  };
};
