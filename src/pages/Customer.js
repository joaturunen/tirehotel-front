import React , {useEffect, useState } from 'react';


// tämä avautuu hakutuloksesta, ei näy navissa

export default function Customer({url, customerId}) {

  
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [saved, setSaved] = useState('');
  const [employeeId, setEmployeeId] = useState('');


  // haetaan tietokannasta yhden asiakkaan tiedot
  useEffect(() => {

    async function getSingleCustomer() {
      let address = '';

      address = url + 'customer/customer_read_single.php?id=' + customerId;
    
      try {
        const response = await fetch(address); 
        const json = await response.json();
        if (response.ok) {
          setFirstname(json.firstname);
          setLastname(json.lastname);
          setPhone(json.phone);
          setEmail(json.email);
          setAddress(json.address);
          setZipcode(json.zipcode);
          setCity(json.city);
          setSaved(json.customersaved);
          setEmployeeId(json.employee_id);
        } else {
          alert(json.error);
        }
      } catch (error) {
        alert(error);
      }
    }
    
    getSingleCustomer();

  }, []);

  return (
    <div>
      <h4>Asiakkaan tiedot</h4>
      <p>{firstname}</p>
      <p>{lastname}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{address}</p>
      <p>{zipcode}</p>
      <p>{city}</p>
      <p>{saved}</p>
      <p>{employeeId}</p>
    </div>
  );
}