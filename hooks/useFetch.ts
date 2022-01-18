import { useEffect, useState } from "react";

type Data = {
  type: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  fileId: string;
  tags: any[];
  AITags: any[];
  embeddedMetadata: any[];
  customCoordinates: any[];
  customMetadata: JSON;
  isPrivateFile: boolean;
  url: string;
  thumbnail: string;
  fileType: string;
  filePath: string;
  height: number;
  width: number;
  size: number;
  hasAlpha: boolean;
  mime: string;
};

export default function useFetch(url: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([] as Data[]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      if (!hasMore) return;
      setLoading(true);
      try {
        const res = await fetch(url, { method: "GET", signal: signal });
        const json = await res.json();

        if (json.length > 0) {
          setData((prev) => [...prev, ...json]);
          setHasMore(false);
        }
        // else {
        //   if (data.length === 0) setData(json);
        //   setHasMore(false);
        // }
        setLoading(false);
      } catch (e: any) {
        setError(e);
        setLoading(false);
      }
    };
    url && fetchData();
    return () => controller.abort();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { loading, error, data, hasMore };
}
