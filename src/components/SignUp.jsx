import React, { useState } from 'react';
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { curve, heroBackground } from "../assets";

const SignUp = () => {
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [idCard, setIdCard] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('University:', university);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('ID Card:', idCard);
    // Reset form fields
    setName('');
    setUniversity('');
    setEmail('');
    setPassword('');
    setIdCard(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="absolute inset-0 z-0">
        <img src={heroBackground} alt="Background" className="w-full h-full object-cover" />
      </div>
      <BackgroundCircles />
      <div className="max-w-md w-full rounded-lg shadow-lg p-8 relative z-10">
      <div className="bg-white bg-opacity-55 rounded-lg p-8">

        <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">Sign Up for Gullak</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="university" className="block text-gray-700 font-semibold mb-2">
              University Name
            </label>
            <input
              type="text"
              id="university"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your university name"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="idCard" className="block text-gray-700 font-semibold mb-2">
              Upload ID Card
            </label>
            <div className="relative">
              <input
                type="file"
                id="idCard"
                className="opacity-0 absolute inset-0 z-50 cursor-pointer"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => setIdCard(e.target.files[0])}
                required
              />
              <div className="bg-gray-100 border border-gray-300 rounded-md p-4 flex items-center justify-center">
                <span className="text-gray-500">{idCard ? idCard.name : 'Choose File'}</span>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        </div>
      </div>
   </div>
  );
};

export default SignUp;