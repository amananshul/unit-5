import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

type Data = {
  id?: string;
  login: string;
  avatar_url: string;
};

const useFetch = (url: string, params: Record<string, unknown>) => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, {
        params: {
          ...params,
        },
      })
      .then((res: AxiosResponse) => {
        setLoading(false);
        if (url === "https://api.github.com/search/users") {
          setData(res.data.items);
        } else {
          setData(res.data)
        }
      })
      .catch(() => {
        setLoading(false);
        setErr(true);
      });
  }, [params.q]);

  return { loading, err, data };
};

export default useFetch;

// https://api.github.com/users/${username}
// https://api.github.com/search/users?q={username}&per_page=5