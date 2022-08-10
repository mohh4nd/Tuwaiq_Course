import React, { useState } from "react";

function LikesCount() {
  const [Likes, setLikes] = useState(5);
  return (
    <div>
      <h1> number of Likes = {Likes}</h1>
      <button onClick={() => setLikes(Likes + 1)}>Up</button>
      <button onClick={() => setLikes(Likes - 1)}>Down</button>
    </div>
  );
}

export default LikesCount;
