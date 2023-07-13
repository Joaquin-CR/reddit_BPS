export type UserPost = {
  idPost: string;
  author: string;
  titles: string;
  imgUrl: string;
  likesCount: number;
  coments: UserComments[];
};

export type UserComments = {
  author: string;
  text: string;
  PostTime: stirng;
  likesCount: number;
};
