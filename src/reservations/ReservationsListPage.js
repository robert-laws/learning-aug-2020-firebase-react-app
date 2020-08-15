import React, { useState, useEffect } from 'react';
import { Header } from '../sections';
import { subscribeToCurrentUserReservations } from './subscribeToCurrentUserReservations';

/*
    This page displays all of the user's current reservations in a list
*/

export const ReservationsListPage = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeToCurrentUserReservations((results) => {
      setReservations(results);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <Header />
      {reservations.length > 0 ? (
        reservations.map((reservation) => (
          <p key={reservation.id}>{reservation.restaurant.name}</p>
        ))
      ) : (
        <p>You have no reservations yet!</p>
      )}
    </>
  );
};
