'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Avatar from '../../../../public/Images/avatar.jpg';
import CommentsIcon from '../../../../public/Images/commentsIcon.svg';
import Dots from '../../../../public/Images/dots.svg';
import LikeImg from '../../../../public/Images/likeBTN.svg';
import LikedImg from '../../../../public/Images/likedBTN.svg';
import SaveIcon from '../../../../public/Images/saveIcon.svg';
import SavedIcon from '../../../../public/Images/savedIcon.svg';
import ShareIcon from '../../../../public/Images/shareIcon.svg';
import { SavedLikedPost } from '../../../../types';

export interface IPost {
  post: any;
  like: boolean;
  save: boolean;
}
const Post: React.FC<IPost> = ({ post, like, save }) => {
  const [liked, setLike] = useState<boolean>(like);
  const [countLikes, setCount] = useState(post.likesAmount);

  const [saved, setSaved] = useState(save);

  const [saveLikeList, setSaveLikeList] = useState<SavedLikedPost[]>([]);

  useEffect(() => {
    const savedLikeData = localStorage.getItem('JSONLikeSaveData');
    if (savedLikeData) {
      setSaveLikeList(JSON.parse(savedLikeData));
    }
    // } else {
    //   localStorage.setItem('JSONLikeSaveData', JSON.stringify(saveLikeInfo));
    //   setSaveLikeList(saveLikeInfo);
    // }
  }, []);

  const CommentsAction = () => {
    console.log('Comments');
  };

  const SaveAction = () => {
    setSaved(!saved);
    console.log('Save', post.idPost);
    // GUARDAR EL CAMBIO
  };

  const LikeAction = () => {
    setLike(!liked);
    if (liked) {
      setCount(countLikes + 1);
    } else {
      setCount(countLikes - 1);
    }
    // GUARDAR EL CAMBIO
    
  };

  const content = (
    <>
      <div className="bg-bgColor-Card md:w-full mb-10 px-10 py-8 rounded drop-shadow-lg">
        {/* HEADER */}
        <div className="flex justify-between">
          <div className="flex items-center">
            <Image
              className="rounded-full w-6 h-6 mr-2"
              src={Avatar}
              alt="Avatar"
            />
            <p className="text-xs">
              {post.author}
            </p>
          </div>
          <div className="items-center unselectable cursor-pointer">
            {liked ? (
              <Image
                className="w-6"
                src={LikeImg}
                alt={''}
                onClick={LikeAction}
              />
            ) : (
              <Image
                src={LikedImg}
                alt={''}
                onClick={LikeAction}
                className="w-6"
              />
            )}
            <p className="text-xs text-center">{countLikes}</p>
          </div>
        </div>
        {/* BODY */}
        <div>
          <p className="hover:text-Color-HoverTitle font-semibold">
            {post.title}
          </p>
          <div className="mt-7 w-full flex justify-center md:px-20">
            <img src={ post.thumbnail } alt="" />
            {/* <Image src={testImg} alt="Body img" /> */}
          </div>
        </div>
        {/* FOOTER */}
        <div className="flex justify-between mt-7">
          <div className="flex justify-between">
            <div className="flex justify-center items-center unselectable cursor-pointer">
              <Image
                className="w-5 mr-2"
                src={CommentsIcon}
                alt="Comments Icon"
                onClick={CommentsAction}
              />
              <p className="text-xs">{post.numComments} Comments</p>
            </div>
            <div className="flex justify-center items-center mx-5 unselectable cursor-pointer">
              <Image className="w-5 mr-2" src={ShareIcon} alt="Share Icon" />
              <p className="text-xs">Share</p>
            </div>
            <div className="flex justify-center items-center cursor-pointer unselectable" onClick={SaveAction}>
              {saved ? (
                <Image
                  className="w-5 mr-2"
                  src={SaveIcon}
                  alt="Save Icon"
                />
              ) : (
                <Image
                  className="w-5 mr-2"
                  src={SavedIcon}
                  alt="Saved Icon"
                />
              )}
              <p className="text-xs cursor-pointer">
                Save
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image className="w-6" src={Dots} alt="Options" />
          </div>
        </div>
      </div>
    </>
  );
  return content;
};

export default Post;
