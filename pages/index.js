import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

export default function Home({ newsResults, randomUsersResults }) {
  return (
    <div >
      <Head>
        <title>Twitter</title>
        <meta name="description" content="A twitter clone " />
      </Head>

      <main className="flex min-h-screen mx-auto">
      <Sidebar/>

      <Feed/>

      <Widgets newsResults={newsResults.articles}   randomUsersResults={randomUsersResults?.results || null} />

       
    </main>
    </div>
  )
}

export async function getServerSideProps() {
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  ).then((res) => res.json());

  let randomUsersResults = [];

  try {
    const res = await fetch(
      "https://randomuser.me/api/?results=30&inc=name,login,picture"
    );

    randomUsersResults = await res.json();
  } catch (e) {
    randomUsersResults = [];
  }

  // const randomUsersResults = await fetch(
  //   "https://randomuser.me/api/?results=30&inc=name,login,picture"
  // ).then((res) => res.json());

  return {
    props: {
      newsResults,
      randomUsersResults
    },
  };
}
