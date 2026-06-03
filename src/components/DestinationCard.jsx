import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaRegCalendar } from "react-icons/fa";
import { PiMapPinLineBold } from "react-icons/pi";

const DestinationCard = ({ destination }) => {
  const { _id, country, destinationName, duration, price, imageUrl } =
    destination;
  return (
    <div className="max-h-500px">
      <Image src={imageUrl} height={400} width={400} alt={destinationName} />
      <div className="flex justify-between items-center ">
        <div>
          <div className="flex items-center gap-2">
            <PiMapPinLineBold /> <span>{country}</span>
          </div>
          <div>
            <h2 className="text-xl font-black">{destinationName}</h2>
          </div>
          <div className="flex items-center gap-2">
            <FaRegCalendar />
            {duration}
          </div>
        </div>
        <div>
          {" "}
          <span className="text-xl font-bold">${price}</span> /person
        </div>
      </div>
      <Link href={`/destinations/${_id}`}>
        {" "}
        <Button variant="ghost" className={"text-cyan-500 mt-1"}>
          Book Now <FaExternalLinkAlt />
        </Button>
      </Link>
    </div>
  );
};

export default DestinationCard;
