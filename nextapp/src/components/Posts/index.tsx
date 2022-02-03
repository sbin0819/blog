import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@graphql/queries';
import faker from 'faker';

export const user = {
  name: faker.name.findName(),
};

function Posts() {
  const { data, loading, error } = useQuery(GET_POSTS);

  return (
    <div>
      <h1>posts</h1>
      {!loading && (
        <ul>
          {data?.posts?.data.map((el: any) => (
            <li key={el.id}>{el.attributes.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Posts;
