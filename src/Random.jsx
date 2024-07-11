import { useState } from "react";

const Random = () => {
  let users = [
    "Nashe",
    "Kuda",
    "Vincent",
    "Alicia",
    "Duke",
    "Chaks",
    "Tinashe",
    "Wayne",
    "Bryan",
  ];
  let [user, setUser] = useState("");

  function pick() {
    setUser(users[Math.floor(Math.random() * users.length)]);
  }
  return (
    <div>
      <h2>
        This random picker was developed for developers lesson sessions only
      </h2>
      <h1>
        Lesson rikuitiswa na <span>{user}</span>
      </h1>
      <button onClick={pick}>Pick Random</button>
    </div>
  );
};

export default Random;
