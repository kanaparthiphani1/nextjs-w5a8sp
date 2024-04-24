'use client';

export default function Error({ message }: { message: string }) {
  return (
    <div>
      <h1>Error in Page Productid</h1>
      <p>{message}</p>
    </div>
  );
}
