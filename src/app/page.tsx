'use client';
import { useEffect, useState } from 'react';
import { NextPageWithLayout } from '../../page';
import { UserPost } from '../../types';
import Post from './components/Post/Post';

const Home: NextPageWithLayout = () => {
  // const router = useRouter();
  const [postList, setPostList] = useState<UserPost[]>([]);

  useEffect(() => {
    const storeData = localStorage.getItem('JSONPostList');
    if (storeData) {
      setPostList(JSON.parse(storeData));
    } else {
      localStorage.setItem('JSONPostList', JSON.stringify(postList));
    }
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-gradient-conic">
        <div className="mt-10">
          <div className="w-16 text-white border-b-2 text-center p-1 text-lg border-borderColor-Posts">
            Posts
          </div>
          <div className="mt-8">
            {/* {postList.map((post) => (
              <> */}
            <Post post={'Hola'} />
            {/* </>
            ))} */}
          </div>
        </div>
        {/* <button onClick={() => router.push('/detailPost')}>Prueba</button> */}
      </main>
    </>
  );
};

export default Home;
