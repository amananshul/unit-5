import React from "react";
import useMergeState from "../hooks/useMergeState";

// type Props = {
//   mergeState: (s: object) => void;
// };

export type User = {
  username: string;
  email: string;
  password: string;
};

const Merge = () => {
  const { state, mergeState } = useMergeState({
    username: "harry",
    email: "abc@gmail.com",
    password: "1234",
  });

  return (
    <div className="py-10">
      <input
        className="border-2 border-black mx-12"
        placeholder="username"
        type="text"
        name="username"
        onChange={(e) => mergeState({ username: e.target.value })}
        // onChange={handleChange}
      />
      <input
        className="border-2 border-black mx-12"
        type="text"
        placeholder="Email"
        name="email"
        onChange={(e) => mergeState({ email: e.target.value })}
      />
      <input
        className="border-2 border-black mx-12"
        type="text"
        placeholder="password"
        name="password"
        onChange={(e) => mergeState({ password: e.target.value })}
      />

      <div>
        <p>Username: {state.username}</p>
        <p>email: {state.email}</p>
        <p>Username: {state.password}</p>
      </div>
    </div>
  );
};

export default Merge;