import React, {createContext, useEffect, useState} from 'react'

//data
import {roomData} from '../data'

//create context
export const RoomContext = createContext()

const RoomProvider = ({children}) => {
  // console.log(roomData);
  const [rooms, setRooms] = useState(roomData)
  const [adults, setAdults] = useState("1 Adult")
  const [kids, setKids] = useState("0 Kids")
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  // console.log(total);
  // console.log(rooms);

  // console.log(`adults: ${adults}, kids: ${kids}`);
  // console.log(Number(adults[0]));
  // console.log(Number(kids[0]));

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]))
  })
  // console.log(total);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true)
    // console.log(total);
    // console.log(rooms);
    //filter rooms based on total (person)
    const newRooms = roomData.filter(room => {
      return total <= room.maxPerson
    })
    setTimeout(() => {
      setRooms(newRooms);
      setLoading(false)
    }, 3000)
    
  };
  // console.log(rooms);

  return (
    <RoomContext.Provider value={{rooms, adults, setAdults, kids, setKids, handleClick, loading}}>
      {children}
    </RoomContext.Provider>
  )
}

export default RoomProvider