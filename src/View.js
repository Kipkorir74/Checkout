import { useState } from "react";


const View = ({ info }) => {
  const [FirstName, setFirstName]=useState('');
  const [SecondName, setSecondName]=useState('');
  const [Phone, setPhone]=useState('');
  const [address, setAddress]=useState('');
  const [payment, setPayment]=useState('');
  const [isPending, setIsPending]=useState(false);

  
const handleSubmit = (e) => {
  e.preventDefault();
  const info = {FirstName,SecondName, Phone, address,payment};

  console.log(info);
  
  
  fetch('http://localhost:8000/info/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info)
    }).then(() => {
      console.log('new order added');
    })
}


    return (
      <div className="content">
        <div className="create">
         <h2>Customer Details</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" 
                required value= {FirstName}
                onChange={ (e)=>{setFirstName(e.target.value)}}
                />

                <label>Second Name</label>
                <input type="text" 
                required value= {SecondName}
                onChange={ (e)=>{setSecondName(e.target.value)}}
                />

                <label>Phone Number</label>
                <input type="text" 
                required value= {Phone}
                onChange={ (e)=>{setPhone(e.target.value)}}
                />

                 <label>Address</label>
                <input type="text" 
                required value= {address}
                onChange={ (e)=>{setAddress(e.target.value)}}
                />

                
                <label>Payment Method</label>
                <select value= {payment}
                onChange={ (e)=>{setPayment(e.target.value)}}>
                    <option value="MPESA">MPESA</option>
                    <option value="CASH ON DELIVERY">Cash on Delivery</option>
                    <option value="Stripe">Stripe</option>
                </select>
                {!isPending && <button>Checkout</button>}
                {isPending && <button disabled> Adding checkout...</button>}
                
            </form>
            <div>
              
            </div>
            
        </div>

        <div className="tableu">
              
              <tbody>
                <h2>Checkout Information</h2>
                          <tr>
                              <th> First Name</th>
                              
                              <th> Second Name</th>
                             
                              <th> Phone</th>
                              
                              <th> Address</th>
                              
                              <th> Payment Method</th>
                              
                          </tr>
                          
            {info.map(info => (
              <tr key={info.id} >
        
                      <td>{info.FirstName}</td>
                      <td>{info.SecondName}</td>
                      <td>{info.Phone}</td>
                      <td>{info.address}</td>
                      <td>{info.payment}</td>
                      
              </tr>
                   
           
          ))}
              </tbody>
              </div>

      </div>
      
    );
  }
   
  export default View;