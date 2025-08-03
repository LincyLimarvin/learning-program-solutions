import React from 'react';

const OfficeList = () => {
  const offices = [
    {
      name: "CozySpace",
      rent: 50000,
      address: "Chennai, TN",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "EliteHub",
      rent: 75000,
      address: "Bangalore, KA",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "WorkNest",
      rent: 45000,
      address: "Hyderabad, TS",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div>
      {/* JSX heading */}
      <h1 style={{ textAlign: "center" }}>Office Space Rentals</h1>

      {/* List rendering using JSX map */}
      {offices.map((office, index) => {
        const rentStyle = {
          color: office.rent < 60000 ? 'red' : 'green',
          fontWeight: 'bold'
        };

        return (
          <div key={index} style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px"
          }}>
            <img src={office.image} alt={office.name} width="150" />
            <h2>{office.name}</h2>
            <p><strong>Address:</strong> {office.address}</p>
            <p style={rentStyle}><strong>Rent:</strong> ₹{office.rent}</p>
          </div>
        );
      })}
    </div>
  );
};

export default OfficeList;
