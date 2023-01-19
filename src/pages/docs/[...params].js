import { useRouter } from "next/router";

function Doc() {
  const { query = {} } = useRouter();
  const { params = [] } = query;
  console.log({ params });

  if (params?.length === 2) {
    return  <h1>Viewing docs for feature{params[0]}and concept {params[1]}</h1>;
   
  }
  if (params?.length === 1) {
    return  <h1>Viewing docs for feature{params[0]}</h1>;
   
  }

  return (
    <h1>
      This is Doc
      {/* {params.map(param=>(
        <p key={param}>{param}</p>
    ))} */}
    </h1>
  );
}

export default Doc;
