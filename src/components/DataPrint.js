import React, { useState, useEffect } from 'react';
import { db } from '../config/Database';
import { collection, getDocs } from 'firebase/firestore';

function DataPrint() {
  const [room, setRoom] = useState([]);
  const [orders, setOrders] = useState([]);
  const [orderedFood, setOrderedFood] = useState([]);
  //   useEffect(() => {
  //     const colRef = collection(db, 'rooms');

  //     booksRef.on('value', (snapshot) => {
  //       const booksData = snapshot.val();
  //       const booksArray = [];

  //       for (let bookId in booksData) {
  //         booksArray.push({ id: bookId, ...booksData[bookId] });
  //       }

  //       setBooks(booksArray);
  //     });
  //   }, []);
  const getBooks = async () => {
    const querySnapshot = await getDocs(collection(db, 'rooms'));
    const roomArray = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      roomArray.push({ id: doc.id, ...doc.data() });
      console.log(doc.id, ' => ', doc.data());
    });
    setRoom(roomArray);
  };
  // getBooks();

  // getting data from firestore
  const getFoods = async () => {
    const querySnapshot = await getDocs(collection(db, 'foods'));
    const foodArray = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      foodArray.push({ id: doc.id, ...doc.data() });
      // console.log(doc.id, ' => ', doc.data());
    });
    setOrders(foodArray);
  };

  // getFoods();

  // getting food name of each order
  const getFoodName = async () => {
    try {
      const foodsSnapshot = await getDocs(collection(db, 'foods'));
      const ordersSnapshot = await getDocs(collection(db, 'orders'));

      const foodArray = foodsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const orderArray = ordersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log(foodArray);
      // console.log(orderArray);

      const orderFoodArray = [];

      orderArray.forEach((order) => {
        const foodsWithNames = order.foods.map((food_id) => {
          const matchingFood = foodArray.find(
            (food) => food.food_id === food_id
          );
          return matchingFood ? matchingFood.name : 'Unknown Food';
        });

        orderFoodArray.push({
          ...order,
          foodNames: foodsWithNames,
        });
      });

      // console.log(orderFoodArray);
      setOrderedFood(orderFoodArray);
      console.log(orderedFood);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  getFoodName();

  return (
    <div>
      {/* <h1>Room List</h1>
      <ul>
        {room.map((room) => (
          <li key={room.id}>
            <h2>{room.occupancy ? 'Room available' : 'Room not available'}</h2>
            <p>{room.description}</p>
          </li>
        ))}
      </ul> */}
      <h1>Food List</h1>
      <ul>
        {orderedFood.map((order) => (
          <li key={order.id}>
            <h2>Order id : {order.order_id}</h2>
            <p>Food ids : {order.foodNames.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataPrint;
