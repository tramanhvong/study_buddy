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
  const [buddies, setBuddies] = useState<Array<Schema["Buddy"]["type"]>>([]);

  function listBuddies() {
    client.models.Buddy.observeQuery().subscribe({
      next: (data) => setBuddies([...data.items]),
    });
  }

  useEffect(() => {
    listBuddies();
  }, []);

  function addBuddies(buddy_uid:string) {
    client.models.Buddy.add({
      buddies.add(buddy_uid),
    });
  }

  return (
    <main>
      <h1>My Buddies</h1>
      <button onClick={addBuddies}>+ new</button>
      <ul>
        {buddies.map((buddy) => (
          <li key={buddy.id}>{buddy.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}
