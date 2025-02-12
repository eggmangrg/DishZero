import { useState } from "react"
import CheckOutModal from "../widgets/CheckOutModal"
import ScanQRCode from "../widgets/ScanQRCode"
import ScanButton from "../widgets/ScanButton"


const CheckIn = () => {
  const [DishID, setDishID] = useState("")
  const [PopUp, setPopUp] = useState(false)
  const [ShowQRScanner, setShowQRScanner] = useState(true)

  return (
    <div>
      <ScanQRCode setShowQRScanner={setShowQRScanner} ShowQRScanner={ShowQRScanner} mode="Checkin dishes" DishID={DishID} setDishID={setDishID} setPopUp={setPopUp} PopUp={PopUp} />
      <CheckOutModal DishID={DishID} setPopUp={setPopUp} PopUp={PopUp} />
    </div>
  )
}

export default CheckIn