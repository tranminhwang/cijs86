import User from "./User";

function UserList() {
  const users = [
    {
      fullName: "Alice",
      age: 18,
    },
    {
      fullName: "Bob",
      age: 20,
    },
    {
      fullName: "Cris",
      age: 40,
    },
  ];

  return (
    <div className="persons_container">
      {users.map((user, i) => (
        <User key={i} fullName={user.fullName} age={user.age} />
      ))}
    </div>
  );
}

export default UserList;
