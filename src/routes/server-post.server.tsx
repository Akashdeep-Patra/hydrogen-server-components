import { useQuery } from '@shopify/hydrogen';
import { Suspense } from 'react';
import Page from '../components/Page.server';
import Post from '../components/Post.server';
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
        <Suspense key={post.id} fallback={<Skeleton count={1} />}>
          <Post key={post.id} postId={post.id} />
        </Suspense>
      ))}
    </>
  );
};
