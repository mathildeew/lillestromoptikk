import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import useAPI from "../../hooks/useAPI";

export default function Instagram() {
  const { fetchAPI, instagramFeed, isLoading, isError } = useAPI();

  const getFeed = useCallback(async () => {
    await fetchAPI(`https://feeds.behold.so/b3mmEs0psh3iCG2HZOu6`);
  }, []);

  useEffect(() => {
    getFeed();
  }, [getFeed]);

  console.log(instagramFeed);

  return (
    <div className="grid grid-cols-3 grid-rows-1 ">
      {instagramFeed.map((post) => (
        <div key={post.id}>
          <img
            src={post.mediaUrl}
            className="h-96 w-96  object-cover
             border-2 border-black"
          />
        </div>
      ))}
      <h2>Følg oss på instagram</h2>
    </div>
  );
}
