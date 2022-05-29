import { useState } from "react";
import { User } from "../components/Merge";

const useMergeState = (initState: User) => {
  const [state, setState] = useState<User>(initState);

  const mergeState = (newState: any) => {
    setState({ ...state, ...newState });
  };

  return {state, mergeState};
};

export default useMergeState;