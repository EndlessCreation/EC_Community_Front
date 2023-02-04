import Head from 'next/head';
import MainNav from '@components/layouts/MainNav';
import Main from '@components/Main';

const MainPage = () => {
  return (
    <>
      <Head>
        <title>Endless Creation</title>
      </Head>
      <MainNav />
      <Main />
    </>
  );
};

export default MainPage;
