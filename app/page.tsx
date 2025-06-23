"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  // const [buddies, setBuddies] = useState<Array<Schema["Buddy"]["type"]>>([]);

  // function listBuddies() {
  //   client.models.Buddy.observeQuery().subscribe({
  //     next: (data) => setBuddies([...data.items]),
  //   });
  // }

  // useEffect(() => {
  //   listBuddies();
  // }, []);

  // function addBuddies(buddy: Schema["Buddy"]["type"] = { name: "New Buddy" }) {
  //   client.models.Buddy.create({
  //     buddy: buddy,
  //   });
  // }

  function submitForm() {
    const form = document.getElementsByClassName("matchingForm")[0] as HTMLFormElement;
    const formData = new FormData(form);
    const data: Record<string, number> = {};
    
    formData.forEach((value, key) => {
      data[key] = parseInt(value as string, 10);
    });
  }

  return (
    <main>
      <h1 className="title">Study Buddy Matcher</h1>
      <a className="hyperlink" href="https://devpost.com/software/study-buddies-cm8asp">An extended project from AKTV's StudyBuddy</a>
      <div className="formField1">
        <p className="form1Title">Contact Information</p>
        <form className="contactForm">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="fname" placeholder="Your first name here" />
          <br/>
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lname" placeholder="Your last name here"/>
          <br/>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email here"/>
        </form>
      </div>
      <div className="formField2">
        <p className="form2Title">Matching Details</p>
        <form className="matchingForm">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" placeholder="Your age here"/>
          <br/>
          <label htmlFor="major">Major</label>
          <select name="major" id="major" multiple>
            <option value="1">Mathematics</option>
            <option value="2">Chemistry</option>
            <option value="3">Physics</option>
            <option value="4">Computer Science</option>
            <option value="5">Biology</option>
          </select>
          <br/>
          <label htmlFor="year">Graduation Year</label>
          <select name="year" id="year">
            <option value="2026">2024</option>
            <option value="2027">2025</option>
            <option value="2028">2026</option>
            <option value="2029">2027</option>
            <option value="2030">2028</option>
          </select>
        </form>
      </div>
      <button onClick={submitForm}>Get Group Suggestion</button>
    </main>
  );
}
