"use client";

import SubmitUser from "./action";

export default function Home() {
  const SubmitUsers = async () => {
    const resp = await SubmitUser();
    if (resp.success) {
      console.log("User Created");
    }
    if(!resp.success){
      console.log("User not Created")
    }
  };

  return (
    <>
      <div>hi</div>
      <button onClick={SubmitUsers}>Create User</button>
    </>
  );
}
