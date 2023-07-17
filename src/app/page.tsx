import { NextPageWithLayout } from '../../page';
import getData, { PostClass } from './api/getPosts';
import Post from './components/Post/Post';

const Home: NextPageWithLayout = async () => {
  let dataList: PostClass[] | undefined = await getData();
  let postList = JSON.parse(JSON.stringify(dataList));
  // const [postList, setPostList] = useState<UserPost[]>([]);
  // const [saveLikeList, setSaveLikeList] = useState<SavedLikedPost[]>([]);

  // useEffect(() => {
  //   const storeData = localStorage.getItem('JSONPostList');
  //   if (storeData) {
  //     setPostList(JSON.parse(storeData));
  //   } else {
  //     localStorage.setItem('JSONPostList', JSON.stringify(postData));
  //     setPostList(postData);
  //   }
  //   const savedLikeData = localStorage.getItem('JSONLikeSaveData');
  //   if (savedLikeData) {
  //     setSaveLikeList(JSON.parse(savedLikeData));
  //   } else {
  //     localStorage.setItem('JSONLikeSaveData', JSON.stringify(saveLikeInfo));
  //     setSaveLikeList(saveLikeInfo);
  //   }
  // }, []);

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
                    <Post post={userPost} like={true} save={true}/>
                </>
              )
              // const found = saveLikeList.find((item) => item.idPost === userPost.idPost)
              // if (found != undefined) {
              //   return (
              //     <>
              //         <Post post={userPost} like={!found.liked} save={!found.saved}/>
              //     </>
              //   )
              // } else {
              //   return (
              //     <>
              //         <Post post={userPost} like={true} save={true}/>
              //     </>
              //   )
              // }
              })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
