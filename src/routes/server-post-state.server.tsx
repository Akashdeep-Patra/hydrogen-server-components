import { useQuery } from '@shopify/hydrogen';
import { Suspense } from 'react';
import Page from '../components/Page.server';
import PostWithData from '../components/PostWithData.client';
import Skeleton from '../components/Skeleton';
import { getPosts } from '../services/index';

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
        <PostWithData key={post.id} post={post} />
      ))}
    </>
  );
};
