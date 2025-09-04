import React from "react";

function Comment({ comment }) {
  return (
    <div className="border-b py-2">
      <p className="font-semibold">{comment.username}</p>
      <p className="text-gray-700">{comment.text}</p>
    </div>
  );
}

export default Comment;
