'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <div className="">
      <div className="flex gap-3">
        <Link
          href="/signin"
          className={
            path.startsWith('/signin') ? 'text-orange-500' : 'text-stone-50'
          }
        >
          Sign In
        </Link>
        <Link
          href="/singup"
          className={
            path.startsWith('/singup') ? 'text-orange-500' : 'text-stone-50'
          }
        >
          Sign Up
        </Link>
      </div>
      {children}
    </div>
  );
}
