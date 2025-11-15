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
        <p>Check out our</p>
        <h2>Contacts</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          dignissimos doloribus pariatur, eos repudiandae enim, voluptate, quod
          aspernatur suscipit ab ipsa tempora animi corporis eius natus ullam
          iusto vitae cupiditate! Quod, eligendi voluptas maiores pariatur
          beatae incidunt.
        </p>
        <div className="contacts">
          <div className="contact">
            <img src="/Altar-tattoo-studio/map-regular-full.svg"></img>
            <p>Han Asparuh 28, Sofia, Bulgaria 1000</p>
          </div>
          <div className="contact">
            <img src="/Altar-tattoo-studio/phone-solid-full.svg"></img>
            <p>+359 887 663 355</p>
          </div>
          <div className="contact">
            <img src="/Altar-tattoo-studio/clock-regular-full.svg"></img>
            <p>Mon - Sat: 9:00 - 18:00 Sunday: Day Off</p>
          </div>
          <div className="contact">
            <img src="/Altar-tattoo-studio/envelope-regular-full.svg"></img>
            <p>ltar@tattoo.com</p>
          </div>
        </div>
      </div>
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
      {/* <div className="location">
        <img src="/Altar-tattoo-studio/map.png" alt="map" />
      </div> */}
    </section>
  );
}
