function User({ user }) {
  return (
    <>
      <p style={{ textAlignL: "left" }}>{user.name}</p>
      <p style={{ textAlignL: "left" }}>{user.email}</p>
    </>
  );
}

export default User;
