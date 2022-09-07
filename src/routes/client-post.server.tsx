import { Suspense } from 'react';
import Page from '../components/Page.server';
import { getPosts } from '../services/index';
import { useQuery } from '@shopify/hydrogen';
import Post from '../components/Post.client';
import Skeleton from '../components/Skeleton';

export default function Home() {
  return (
    <Page>
      <Suspense fallback={<Skeleton />}>
        <PostList />
      </Suspense>
    </Page>
  );
}

export const PostList = () => {
  const { data } = useQuery(['posts'], getPosts);
  if (!data?.data) return <span>Oops something went wrong on the Server</span>;

  return (
    <>
      {data.data?.map((post) => (
        <Post key={post.id} postId={post.id} />
      ))}
    </>
  );
};
