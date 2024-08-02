'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
  { id: "home", name: "Home", href: "/dashboard", icon: HomeIcon },
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    id: "invoices",
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  {
    id: "customers",
    name: "Customers",
    href: "/dashboard/customers",
    icon: UserGroupIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
<<<<<<<  974f356f-bf0b-4c12-9ccc-59a3b68ff297  >>>>>>>
];

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <>
    {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathName === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
