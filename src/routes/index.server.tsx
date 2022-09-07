import { Link } from '@shopify/hydrogen';
import Page from '../components/Page.server';

const Home = () => {
  return (
    <Page>
      <div className='container'>
        <h1>React Server Components in Hydrogen</h1>
        <h2>With Streaming</h2>
        <section>
          <Link to='/server-post' target='_blank'>
            🐌 SSR with streaming and server rendered posts without state
          </Link>
        </section>
        <section>
          <Link to='/server-post-state' target='_blank'>
            🐌 SSR with streaming and server rendered posts with state (Pure
            Client components rendered on the server)
          </Link>
        </section>
        <section>
          <Link to='/client-post' target='_blank'>
            🐌 SSR with streaming and client rendered posts with state (Impure
            Client components rendered on the client)
          </Link>
        </section>
        <br />
        <section>
          <p>
            <small>
              This demo is built with
              <a href='https://hydrogen.shopify.dev/' target='_blank'>
                {`  Hydrogen  `}
              </a>
              and React Server Components.
            </small>
          </p>
        </section>
      </div>
    </Page>
  );
};

export default Home;
