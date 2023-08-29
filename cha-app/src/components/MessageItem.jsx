const MessageItem = (props) => {
  const { message } = props;

  return (
    <div>
      <div className="message-item_wrapper">
        <div className="avatar">
          <img src={message.sender_avt} alt="avatar" />
        </div>
        <p className="content">{message.content}</p>
      </div>
    </div>
  );
};

export default MessageItem;
