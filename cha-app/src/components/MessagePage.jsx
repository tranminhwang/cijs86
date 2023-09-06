import { useContext, useEffect, useRef, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { isEmpty, trim, get, map } from "lodash";
import MessageItem from "./MessageItem";
import { FirebaseContext } from "../context/FirebaseProvider";
import {
  addDoc,
  query,
  onSnapshot,
  limit,
  doc,
  getDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const MessagePage = () => {
  const { msgCollection, testCollection } = useContext(FirebaseContext);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = getAuth();
  const ref = useRef(null);

  const singleDoc = doc(testCollection, "4xTRjyz6iAKZG6ID5PaL");

  const handleScrollBottom = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async (messageObj) => {
    try {
      setIsLoading(true);
      await addDoc(msgCollection, messageObj);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // const getMessages = async () => {
    //   const docs = await getDocs(msgCollection);

    //   const temp = [];
    //   docs.forEach((doc) => {
    //     temp.push(doc.data());
    //   });
    //   temp.sort((a, b) => a.createdAt - b.createdAt);
    //   setMessages(temp);
    // };
    // getMessages();
    (async () => {
      const msgDoc = await getDoc(singleDoc);
      console.log(msgDoc.data());
    })();

    const q = query(msgCollection, limit(50));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const temp = [];
      querySnapshot.forEach((doc) => {
        temp.push(doc.data());
      });
      temp.sort((a, b) => a.createdAt - b.createdAt);
      setMessages(temp);
    });

    return () => unsubscribe;
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col h-full container mx-auto max-w-[500px]">
        <div className="flex-1 overflow-y-scroll" ref={ref}>
          {messages.map((message, idx) => (
            <MessageItem key={idx} message={message} />
          ))}
        </div>
        <form
          className="flex py-4"
          onSubmit={async (e) => {
            e.preventDefault();

            const content = e.target.msg_input.value;
            console.log("content", isEmpty(content));
            if (isEmpty(trim(content))) {
              alert("Please enter your message");
              return;
            }
            const message = {
              content: content,
              createdAt: new Date().valueOf(),
              sender_avt: get(
                currentUser,
                "photoURL",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXfOXp0wjRKKMo7Ur549QMftp5FOQD2MeYNQ6X3MO&s"
              ),
              sender_id: get(currentUser, "uid", "anonymous"),
            };
            await sendMessage(message);
            handleScrollBottom();
            e.target.msg_input.value = "";
          }}
        >
          <Input
            type="text"
            name="msg_input"
            placeholder="Enter your message..."
          />
          <Button color="primary" isLoadin={isLoading}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MessagePage;
