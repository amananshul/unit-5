import React, { useState } from "react";

import useFetch from "../hooks/useFetch";


const url = "https://api.github.com/search/users";

const Fetch = () => {
  const [text, setText] = useState<string>("");

  const { data, loading, err } = useFetch(url, {
    per_page: 5,
    q: text || "masai",
  });

  const onChangeDebounced = useDebouncedCallback(
    (e) => setText(e.target.value),
    [],
    1200,
    0
  );

  return (
    <div>
      <input
        className="border-2 border-black"
        type="text"
        placeholder="Enter text"
        onChange={(e) => onChangeDebounced(e)}
      />
      {loading ? (
        <div>
          <CircularProgress />
        </div>
      ) : err ? (
        <div>Something went wrong ...</div>
      ) : (
        <div>
          {data ? (
            data.map((el) => {
              return (
                <div key={el.id}>
                  <img
                    height={100}
                    width={100}
                    src={el.avatar_url}
                    alt="avatar"
                  />
                  <h6>{el.login}</h6>
                </div>
              );
            })
          ) : (
            <div>Data Not Found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Fetch;