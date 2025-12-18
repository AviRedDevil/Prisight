export default function Sidebar() {
  return (
    <div className="h-screen w-60 bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">Prisight</h1>

      <nav className="space-y-4 text-sm">
        <p className="text-indigo-400">Dashboard</p>
        <p>Pricing</p>
        <p>Promotions</p>
        <p>Inventory</p>
        <p>Reports</p>
      </nav>
    </div>
  );
}
