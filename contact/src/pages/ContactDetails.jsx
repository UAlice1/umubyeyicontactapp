import { useEffect, useState } from "react";
import { DeleteContact, FetchContactById } from "../apis/contacts";
import { useParams, useNavigate } from 'react-router-dom';

const ContactDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState({});
  const [message, setMessage] = useState({
    type: '',
    content: ''
  });

  useEffect(() => {
    FetchContactById(params.contactId)
      .then((response) => {
        setContact(response);
      })
      .catch((error) => {
        setMessage({
          type: 'error',
          content: 'Error fetching contact details. Please try again later.'
        });
        console.error(error);
      });
  }, []);

  const deleteContact = (event) => {
    event.preventDefault();

    DeleteContact(params.contactId)
      .then((response) => {
        setMessage({
          type: 'success',
          content: response
        });

        setTimeout(() => {
          // Vanilla JavaScript, it reloads the website
          window.location.replace('/');
          // Using react-router-dom
          // navigate('/');

        }, 2000)
      })
      .catch((error) => {
        setMessage({
          type: 'error',
          content: 'Error deleting contact. Please try again later.'
        });
        console.error(error);
      });
  }

  return (
    <div className="flex justify-center ">
      <h1>Name: {contact.fullName}</h1><br></br>
      <p>Phone: {contact.phone}</p><br></br>
      <p>Email: {contact.email}</p><br></br>

      <button className=" focus:relative bg-red-600 block px-5 py-3 text-sm font-medium text-black transition rounded-lg focus:outline-none focus:ring" onClick={deleteContact} type="button">Delete</button><br></br>
      <button onClick={() => navigate(`/update/${contact._id}`)} className="block px-5 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring">Update</button>

      {message.type === 'success' && <p className="px-3 py-2 text-green-700 bg-green-200 rounded-sm">{message.content}</p>}
      {message.type === 'error' && <p className="px-3 py-2 text-red-700 bg-red-200 rounded-sm">{message.content}</p>}
    </div>
  )
}

export default ContactDetails;
