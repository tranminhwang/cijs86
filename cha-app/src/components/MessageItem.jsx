import { User, Link as NextUILink } from "@nextui-org/react";
import { getAuth } from "firebase/auth";

const MessageItem = (props) => {
  const { message } = props;
  const { currentUser } = getAuth(); // justify-end
  console.log("currentUser", currentUser);

  return (
    <div className="mb-4">
      <div
        className="flex gap-4"
        style={{
          justifyContent:
            currentUser.uid === message.sender_id ? "flex-end" : "flex-start",
          flexDirection: currentUser.uid === message.sender_id && "row-reverse",
        }}
      >
        <User
          style={{
            marginRight: currentUser.uid === message.sender_id && "0",
            marginLeft: currentUser.uid === message.sender_id && "auto",
          }}
          name={message.sender_name ? message.sender_name : "Anonymous"}
          description={
            <NextUILink href="#" size="sm" isExternal>
              @{message.sender_name ? message.sender_name : "Anonymous"}
            </NextUILink>
          }
          avatarProps={{
            src: message.sender_avt,
          }}
        />
        <p className="content bg-blue-500 rounded-xl text-white text-center flex items-center justify-center px-4">
          {message.content}
        </p>
      </div>
    </div>
  );
};

export default MessageItem;
