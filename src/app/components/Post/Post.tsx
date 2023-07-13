export interface IPost {
  post: any;
  // onEditDeleteClick: (
  //   open: boolean,
  //   id: number,
  //   name: string,
  //   type: string
  // ) => void;
}
const Post: React.FC<IPost> = ({ post }) => {
  const content = (
    <>
      <div className="bg-bgColor-Card w-full">{post}</div>
    </>
  );
  return content;
};

export default Post;
