import Image from 'next/image';

interface ProfileAvatarProps {
  fullName: string;
  title: string;
  url: string;
}
export default function ProfileAvatar({ fullName, title, url } : ProfileAvatarProps) {
  return (
    <div className="profile-container">
      <div className="picture-frame">
        <Image  className="profile" width={100} height={100} src={url} alt={fullName} />
      </div>
      <h1 className="name">{fullName}</h1>
      <h3 className="tagline">{title}</h3>
    </div>
  );
}
