import { NextPageWithLayout } from '../../page';
import getData, { PostClass } from './api/getPosts';
import Post from './components/Post/Post';

const Home: NextPageWithLayout = async () => {
  let dataList: PostClass[] | undefined = await getData();
  let postList = JSON.parse(JSON.stringify(dataList));

  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-gradient-conic">
        <div className="mt-10 sm:w-11/12 md:w-3/5">
          <div className="w-16 text-white border-b-2 text-center p-1 text-lg border-borderColor-Posts mx-3">
            Posts
          </div>
          <div className="mt-8 mx-3">
            {postList.map((userPost: any) => {
              return (
                <>
                    <Post post={userPost}/>
                </>
              )
              })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
