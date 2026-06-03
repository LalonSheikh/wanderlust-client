import BookingCard from "@/components/BookingCard";
import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { FaRegCalendar } from "react-icons/fa";
import { PiMapPinLineBold } from "react-icons/pi";

const DestinationDetailPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`, {
    headers: {
      authorization: "logged in",
    },
  });
  const destination = await res.json();

  console.log(destination);
  const { country, destinationName, description, duration, price, imageUrl } =
    destination;

  return (
    <div className="max-h-7xl mx-auto ">
      <div className="flex items-center gap-3 justify-end mt-5 mb-3">
        <EditModal destination={destination}></EditModal>
        <DeleteAlert destination={destination} />
      </div>
      <Image
        className="w-full h-100 object-cover"
        src={imageUrl}
        width={500}
        height={500}
        alt="profile"
      ></Image>
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
          <div>
            <h1 className="text-xl font-bold">Overview</h1>
            <p>{description}</p>
          </div>
        </div>
        <div className="rounded-none mt-5 border">
          {" "}
          <BookingCard destination={destination}></BookingCard>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailPage;
