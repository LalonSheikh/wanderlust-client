import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { TrashBin } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  // console.log(users, "session's user");

  const res = await fetch(`http://localhost:5000/booking/${user?.id}`);
  const bookings = await res.json();
  console.log(bookings, "data");

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-5">My Bookings</h2>
      <div className="space-y-5">
        {bookings.map((booking) => (
          <div key={booking._id} className="flex gap-5 p-5 border min-w-3xl">
            <Image
              src={booking.imageUrl}
              alt={booking.destinationName}
              width={300}
              height={300}
            ></Image>
            <div>
              <h2 className="text-2xl font-bold">{booking.destinationName}</h2>
              <p>
                {new Date(booking.departureDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>Booking Id: {booking._id}</p>
              <p className="text-3xl font-bold text-cyan-500">
                ${booking.price}
              </p>
          
              <BookingCancelAlert bookingId={booking._id}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingPage;
