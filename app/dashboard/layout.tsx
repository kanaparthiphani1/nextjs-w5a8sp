import Card from '@/components/Card';

export default function DashboardLayout({
  children,
  profits,
  revenue,
  users,
}: {
  children: React.ReactNode;
  profits: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="flex flex-row">
        <Card>{profits}</Card>
        <Card>{revenue}</Card>
        <Card>{users}</Card>
      </div>
    </>
  );
}
