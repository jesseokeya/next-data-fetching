// incremental static generation
import { YOUR_API_URL } from '../lib/api';

export default function IncrementalStaticRegenerationOnDemand({ state }) {
  return (
    <>
      {state.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the api endpoint e.g. api/revalidate get's pinged.
export async function getStaticProps() {
  const res = await fetch(YOUR_API_URL);
  const state = await res.json();

  return {
    props: {
      state, // will be passed to the page component as props
    },
  };
}
