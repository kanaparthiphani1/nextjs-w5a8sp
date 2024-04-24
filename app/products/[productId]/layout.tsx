function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (getRandomInt(2)) {
    throw new Error('Layout Error');
  }
  return <>{children}</>;
}
