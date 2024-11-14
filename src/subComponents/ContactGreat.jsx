import React from "react";
import { useSelector } from "react-redux";

const ContactGreat = () => {
  const userdata = useSelector((user) => user.contactdata.users);
  return (
    <>
      <div className="top-1/2 call left-1/2 fixed bg-white p-10 rounded-md z-40 shadow-2xl w-1/2 ">
        <h2 className="text-2xl font-semibold heading-color  mb-5">
          Congratulaion! &nbsp;
           <span className="blue-color font-semibold text-3xl">
            {userdata.name}
          </span>
        </h2>
        <p className="text-lg mb-6 text-neutral-600">
          We will inform you soon at
          <span className="font-bold blue-color text-lg">&nbsp;{userdata.email}</span>
        </p>
      </div>
    </>
  );
};

export default ContactGreat;
