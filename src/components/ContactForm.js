"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section id="contact" className="contact-us">
      <div className="contact-us-content">
        <h2>Contact us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          consequatur nisi.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            name="phone"
            type="number"
            placeholder="Phone number"
            onChange={handleChange}
          />
          <input
            name="comment"
            type="text"
            placeholder="Comment"
            onChange={handleChange}
          />
          <button className="btn" type="submit">
            Send
          </button>
        </form>
      </div>
      <div className="location">
        <img src="/map.png" alt="map" />
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/024/831/288/small/3d-render-red-pin-map-location-pointer-icon-png.png"
          alt=""
        />
      </div>
    </section>
  );
}
