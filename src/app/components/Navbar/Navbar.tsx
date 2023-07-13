import Image from 'next/image';
import RedditLogo from '../../../../public/Images/free-reddit-logo-icon.webp';

export default function Navbar() {
  const content = (
    <div className="bg-bgColor-Navbar text-white w-full h-16 flex items-center ">
      <Image src={RedditLogo} alt="Vercel Logo" className="ml-8" />
      <p className="ml-5 font-RedexPro font-semibold">reddit</p>
    </div>
  );
  return content;
}
