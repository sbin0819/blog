import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@graphql/queries';

function Posts() {
  const { data, loading, error } = useQuery(GET_POSTS);
  console.log(data?.posts?.data[0]);
  return (
    <div>
      <h1>posts</h1>
      {!loading && (
        <ul>
          {data.posts.data.map((el: any) => (
            <li key={el.id}>{el.attributes.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Posts;
