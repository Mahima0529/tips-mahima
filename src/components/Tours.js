// import Card from "./Card";

// function Tours({tours ,removeTour}){
//     return(
//         <div>
//             <div>
//                 <h2> Tips from Mahima</h2>
//             </div>
//         <div>
//         {
//             tours.map((tour)=>{
//               return  <Card {...tour} removeTour={removeTour}></Card>
                
//             })
//         }
//         </div>
//         </div>
//     );

// }

// export default Tours;


import React from "react";
import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div  className="container">
      <div>
        <h2 className="title">Tips from Mahima</h2>
      </div>
      <div  className="cards">
        {/* {Array.isArray(tours) && tours.length > 0 ? (
          tours.map((tour) => (
            <Card key={tour.id} {...tour} removeTour={removeTour} />
          ))
        ) : (
          <p>No tours available.</p> // Fallback if tours is empty or not an array
        )} */}


        {
          tours.map((tour)=>{
            return <Card  key={tour.id} {...tour} removeTour={removeTour}></Card>
          })
        }
      </div>
    </div>
  );
}

export default Tours;
