import DestinationCard from "@/components/DestinationCard";
import React from "react";

const DestinationPage = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const destinations = await res.json();

  console.log(destinations);

  return (
    <div className="max-w-7xl mx-auto">
      <h2>Destination All</h2>
      <div className="grid grid-cols-4 container mx-auto gap-2">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination._id}
            destination={destination}
          ></DestinationCard>
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
