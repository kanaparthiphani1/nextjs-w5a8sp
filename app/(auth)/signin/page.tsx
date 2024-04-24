'use client';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => {
          router.replace('/');
        }}
      >
        SignIn
      </button>
    </div>
  );
}
