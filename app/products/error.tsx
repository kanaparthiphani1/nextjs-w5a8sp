'use client';
export default function Error({ message }: { message: string }) {
  return (
    <div>
      <h1>Error in Page Products</h1>
      <p>{message}</p>
    </div>
  );
}
