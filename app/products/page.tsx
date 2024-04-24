import Link from 'next/link';

const products = [
  {
    id: '1',
    name: 'Iphone',
  },
  {
    id: '2',
    name: 'Macbook',
  },
  {
    id: '3',
    name: 'Ipad',
  },
  {
    id: '4',
    name: 'iwatch',
  },
];

export default function Products() {
  return (
    <div className="flex flex-col gap-3">
      {products.map((prod) => {
        return <Link href={`products/${prod.id}`}>{prod.name}</Link>;
      })}
    </div>
  );
}
