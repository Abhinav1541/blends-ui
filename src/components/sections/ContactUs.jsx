import React from "react";
import { ContactForm } from "../ui/ContactForm/ContactForm";

export const ContactUs = () => {
  return (
    <div className="bg-white" id="contactus">
      <hr className="h-[0.75rem] bg-brand w-full border-0" />
      <div className="px-10 lg:px-48 py-5 lg:py-20">
        <div className="container mx-auto flex flex-col items-start">
          <p className="uppercase font-akira text-black text-7xl">
            Let's
          </p>
          <p className="uppercase font-akira text-brand text-7xl">
            Team
          </p>
          <p className="uppercase font-akira text-brand text-7xl mb-5">
            Up
          </p>
          <div className="text-black font-poppins text-[1.75rem] font-light">
            Let us know your proposal! <br />
            Kindly fill the form, have a great day!
          </div>
        </div>
        <div className="my-20">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
