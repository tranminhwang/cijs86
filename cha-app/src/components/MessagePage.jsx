import { useContext, useEffect, useState } from "react";
import MessageItem from "./MessageItem";
import { FirebaseContext } from "../context/FirebaseProvider";
import { addDoc, query, onSnapshot, limit } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const MessagePage = () => {
  const { msgCollection } = useContext(FirebaseContext);
  const [messages, setMessages] = useState([]);
  const { currentUser } = getAuth();

  console.log(currentUser);
  // const singleDoc = doc(msgCollection, "MAjkpqAB98O1P7W5Tpac");

  const sendMessage = async (messageObj) => {
    await addDoc(msgCollection, messageObj);
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
    <div className="message-page">
      <div className="message-container">
        {messages.map((message, idx) => (
          <MessageItem key={idx} message={message} />
        ))}
      </div>
      <form
        className="message-input"
        onSubmit={async (e) => {
          e.preventDefault();

          const content = e.target.msg_input.value;
          if (content === "") {
            alert("Please enter your message");
            return;
          }
          const message = {
            content: content,
            createdAt: new Date().valueOf(),
            sender_avt: currentUser.photoURL,
            sender_id: currentUser.uid,
          };
          await sendMessage(message);
          e.target.msg_input.value = "";
        }}
      >
        <input type="text" name="msg_input" />
      </form>
    </div>
  );
};

export default MessagePage;
