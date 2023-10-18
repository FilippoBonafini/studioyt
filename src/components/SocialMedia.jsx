import Link from "next/link";
import clsx from "clsx";
import {
  BsFacebook,
  BsInstagram,
  BsVimeo
} from "react-icons/bs";

export const SocialMediaProfiles = [
  {
    title: "Instagram",
    href: "https://instagram.com/tulpastudio?igshid=OGQ5ZDc2ODk2ZA==",
    icon: BsInstagram,
  },
  {
    title: "Vimeo",
    href: "https://vimeo.com/michelangeloingrosso",
    icon: BsVimeo,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/tulpastudio",
    icon: BsFacebook,
  }
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            target="_blank"
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
