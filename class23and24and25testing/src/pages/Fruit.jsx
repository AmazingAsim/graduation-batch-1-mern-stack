import React, { useState } from 'react'
import Addfruit from '../components/Add_fruits/Addfruit'
import Fruitlist from '../components/Fruit_list/Fruitlist'

export default function Fruit() {
    const [fruits,setFruits] = useState([]);
  return (
    <div>
        <Addfruit fruits={fruits} addFruits={setFruits} />
        <Fruitlist fruits={fruits} addFruits={setFruits} />
    </div>
  )
}
