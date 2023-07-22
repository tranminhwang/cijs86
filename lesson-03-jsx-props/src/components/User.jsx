function User(props) {
  const { fullName, age } = props;
  console.log(props);

  return (
    <div className="person">
      <h3>Name: {fullName}</h3>
      <p>Age: {age + 10}</p>
    </div>
  );
}

export default User;
