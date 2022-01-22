import React from "react";
import { Comment as C } from "./Comment.styled";

const Comment = ({ children }) => {
  return <C>{children}</C>;
};

export default Comment;
