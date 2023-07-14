'use client';
import { useEffect, useState } from 'react';
import { NextPageWithLayout } from '../../page';
import postData from '../../public/postsData.json';
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
      localStorage.setItem('JSONPostList', JSON.stringify(postData));
      setPostList(postData);
    }
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-gradient-conic">
        <div className="mt-10 sm:w-11/12 md:w-3/5">
          <div className="w-16 text-white border-b-2 text-center p-1 text-lg border-borderColor-Posts mx-3">
            Posts
          </div>
          <div className="mt-8 mx-3">
            {postList.map((userPost) => (
              <>
                <Post post={userPost} />
              </>
            ))}
          </div>
        </div>
        {/* <button onClick={() => router.push('/detailPost')}>Prueba</button> */}
      </main>
    </>
  );
};

export default Home;
