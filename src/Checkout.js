import { useEffect, useState } from "react";
import View from "./View";

const Checkout = () => {
  const [info, setInfo] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/info')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setInfo(data);
      })
  }, [])

  return (
    <div className="content">
      {info && <View info={info} />}
    </div>
  );
}
 
export default Checkout;