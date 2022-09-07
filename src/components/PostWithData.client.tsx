import { useState } from 'react';
import PinkHeart from '../svg-components/PinkHeart';
import { IPost } from '../services/types';

export default function PostWithData({ post }: { post: IPost }) {
  const [likes, setLikes] = useState(post.likes);

  const { text, owner, tags } = post;

  return (
    <div className=' shadow-2xl  bg-slate-100 px-3 mt-5 rounded-md py-3 hover:scale-[101%] duration-[500] relative transition-all'>
      <div className='flex items-end gap-3'>
        <img
          className=' w-[50px] rounded-[50%] shadow-lg'
          src={owner.picture}
          alt={owner.title}
        />
        <div className=' flex flex-col'>
          <h1 className='text-xl capitalize font-semibold'>{text}</h1>
          <h3>{`${owner.firstName} ${owner.lastName}`}</h3>
          <p className=' m-0 text-teal-600 font-semibold capitalize'>
            Tags: {tags.join(',')}
          </p>
        </div>
      </div>
      <div
        onClick={() => {
          setLikes(likes + 1);
        }}
        className=' flex items-end cursor-pointer gap-2 absolute right-2 bottom-2'
      >
        <PinkHeart />
        <div className=' capitalize font-bold'> {likes}</div>
      </div>
    </div>
  );
}
