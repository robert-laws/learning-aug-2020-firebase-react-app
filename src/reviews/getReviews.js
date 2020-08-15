import firebase from 'firebase/app';
import { mapAsync } from '../util';
import { getUserInfo } from '../user';

export const getReviews = async (restaurantId) => {
  const querySnapshot = await firebase
    .firestore()
    .collection('reviews')
    .where('restaurantId', '==', restaurantId)
    .get();

  const reviews = querySnapshot.docs().map((review) => ({
    ...review.data(),
    id: review.id,
  }));

  const authoredReviews = await mapAsync(reviews, async (review) => {
    const author = await getUserInfo(review.userId);
    return {
      ...review,
      author,
    };
  });

  return authoredReviews;
};
