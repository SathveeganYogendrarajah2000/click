import RoomBookingCard from "../components/RoomBookingCard";
import { db } from "../../firebase";
import {
  collection,
  doc,
  documentId,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const StandardRates = () => {
  // const roomRef = collection(db, "rooms");
  // const q = query(roomRef, where("name", "==", "Luxury Room Facade View"));
  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });

  // const docRef = doc(db, "rooms", "R001");
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   console.log(docSnap.data());
  // } else {
  //   // docSnap.data() will be undefined in this case
  //   console.log("No such document!");
  // }

  //   try {
  //     const docsSnap =  getDocs(roomRef);
  //     if(docsSnap.docs.length > 0) {
  //        docsSnap.forEach(doc => {
  //           console.log(doc.data());
  //           console.log(doc.id);
  //        })
  //     }
  // } catch (error) {
  //     console.log(error);
  // }

  const bookingCardData = [
    {
      imagePath:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      name: "Luxury Room Facade View",
      description:
        "Elegant and warm color palettes, combined with textured furnishings, give the rooms a sophisticated style that feels personally inviting and cozy",
      type: "King/Twin",
      capacity: "4",
      price: "125",
    },
    {
      imagePath:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      name: "Luxury Room Facade View",
      description:
        "Elegant and warm color palettes, combined with textured furnishings, give the rooms a sophisticated style that feels personally inviting and cozy",
      type: "King/Twin",
      capacity: "4",
      price: "125",
    },
    {
      imagePath:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      name: "Luxury Room Facade View",
      description:
        "Elegant and warm color palettes, combined with textured furnishings, give the rooms a sophisticated style that feels personally inviting and cozy",
      type: "King/Twin",
      capacity: "4",
      price: "125",
    },
  ];

  return (
    <div className="guestroomContainer_rooms_standardrates">
      {/* {console.log(querySnapshot.data())} */}
      {bookingCardData.map((bookingCard, index) => (
        <RoomBookingCard
          key={index} // Use a unique key for each card (typically an ID)
          imagePath={bookingCard.imagePath}
          name={bookingCard.name}
          description={bookingCard.description}
          type={bookingCard.type}
          capacity={bookingCard.capacity}
          price={bookingCard.price}
        />
      ))}
    </div>
  );
};

export default StandardRates;
