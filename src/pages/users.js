import User from "@/components/user";

function UsersList({ users }) {
  console.log(users);
  return (
    <>
      <h1>Uses List Component</h1>

      {users.map((user) => (
        <div key={user.id} style={{display:"flex",flexWrap:"wrap", heightL:"auto",alignItems:"center",justifyContent:"center",gap:"40px",textAlign:"left"}}>
       <User user={user}/>
        </div>
      ))}
    </>
  );
}

export default UsersList;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
