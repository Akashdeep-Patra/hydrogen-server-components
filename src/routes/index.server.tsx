import { Suspense } from 'react';
import Page from '../components/Page.server';
import Post from '../components/Post.server';
import Skeleton from '../components/Skeleton.server';
import { postIds } from '../services/index';

export default function Home() {
  // if (!data?.data) return <span>Oops something went wrong on the Server</span>;

  return (
    <Page>
      {postIds?.map((postId) => (
        <Suspense fallback={<Skeleton count={1} />}>
          <Post postId={postId} />
        </Suspense>
      ))}
    </Page>
  );
}
