import { navigation } from "../constants";
import Link from "next/link";


const FooterNavigation = () => {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8">
        {navigation.map((item) => (
          <li key={item.title}>
            <div className="font-display text-sm font-semibold tracking-wider text-blue-700">
              {item.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {item.links.map((link) => (
                <li key={link.title} className="mt-4">
                  <Link
                    href={link.href}
                    target="_blank"
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavigation;
