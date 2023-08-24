import React, { useState, useEffect } from 'react';
import { db } from '../config/Database';
import { collection, getDocs } from 'firebase/firestore';

function DataPrint() {
  const [room, setRoom] = useState([]);

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
  getBooks();

  return (
    <div>
      <h1>Room List</h1>
      <ul>
        {room.map((room) => (
          <li key={room.id}>
            <h2>{room.occupancy ? 'Room available' : 'Room not available'}</h2>
            <p>{room.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataPrint;
