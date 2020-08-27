import Head from 'next/head';
import ComingSoon from '../components/ComingSoon';

export default function Home() {
  return (
    <>
      <Head>
        <title>La 7ème de couverture</title>
      </Head>
      <main
        className="h-screen w-screen flex bg-center"
        style={{ backgroundImage: 'url("/images/bg-md.jpg")' }}
      >
        <ComingSoon />
      </main>
    </>
  );
}
