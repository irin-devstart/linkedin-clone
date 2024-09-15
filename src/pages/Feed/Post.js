import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import "./Post.css";

const Post = forwardRef(({ name, description, messege, photoUrl }, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__header">
        <Avatar src={photoUrl}> M</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      Ipsum pariatur magna commodo veniam culpa ad dolore ea aliqua Lorem aute do. Ullamco amet non ea ullamco ullamco. Elit minim magna amet ipsum sint duis.
Sunt reprehenderit magna Lorem velit officia nisi et duis qui commodo cupidatat laborum commodo. Amet duis non labore ut minim proident deserunt eu nulla do do commodo. Aute nostrud anim occaecat do deserunt ex incididunt culpa. Amet velit in irure dolor esse dolor Lorem. Lorem nostrud eu eu Lorem. Pariatur et esse ut tempor tempor ea ipsum consequat sit amet deserunt. Ut do dolor laborum labore consequat aliqua voluptate culpa veniam laboris nulla.
      <div className="post__body">
        <p>{messege}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="grey" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="grey" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="grey" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="grey" />
      </div>
    </div>
  );
});

export default Post;
