import React, { useState, useEffect } from "react"
import { FetchContacts } from "../apis/contacts"
import Contact from "./ContactDetails";

const Home = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    FetchContacts()
      .then((response) => {
        setContacts(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Add a loading state
  

  return (
    <div className="flex justify-center items-center w-full bg-gray-900">
      <section className="bg-gray-900 text-white">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">My contacts</h2>

            <p className="mt-4 text-gray-300">
             am Alice this is my home page of contact app
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {/* Add a null check for contacts before mapping */}
            {contacts && contacts.map((contact) => (
              <Contact key={contact._id} contact={contact} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;