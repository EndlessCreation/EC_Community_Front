import Head from 'next/head';
import MainNav from '@components/layouts/HomeLayout/MainNav';
import Main from '@components/home/Main';

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
