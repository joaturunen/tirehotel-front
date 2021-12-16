import React,{useState, useEffect} from 'react';
import { boxColorLayot, Choice, buttonStyle} from '../style/colors';
import {URL} from '../back/Config';

export default function Services({addToCart }) {
    const [services, setServices] = useState([]);

    useEffect(() => {
        async function getServices() {
            console.log(url);
            try {
                const response = await fetch(URL + 'services/services_read_all.php');
                const json = await response.json();
                if (response) {
                    setServices(json);
                } else {
                    alert(json.error);
                }
            } catch (error) {
                alert(error);
            }
        }
        getServices();
    }, []);


    return (
        <>
          <div className="padding" style={boxColorLayot}>
          <h5>Palvelut</h5>
          <p><strong>Valitse säilytyskausi</strong></p>
          <table class="table table-striped table-hover">

            <tbody>
              {services.map(service =>{

                if(service.category_id === 1){
                  return(
                    <tr key={service.id} onClick={() => addToCart(service)}>
                      <td>{service.service}</td>
                      <td className="text-right">{service.price} €</td>
                    </tr>
                  )

                }
              })}
            </tbody>
          </table>
          <p><strong>Valitse huolto</strong></p>
          <table class="table table-striped table-hover">
            <tbody>
            {services.map(service =>{
              if(service.category_id === 2){
                return(
                  <tr key={service.id} onClick={() => addToCart(service)}>
                    <td>{service.service}</td>
                    <td className="text-right">{service.price} €</td>
                  </tr>
                )
              }
              })}
            </tbody>
          </table>
          </div>
        </>
    );
}

