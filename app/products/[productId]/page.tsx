export default function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  return <div className="">{params.productId}</div>;
}
