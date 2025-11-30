function ComplexdashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true; // if this is false then ill see login page or else the analytics stuff
  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div className="flex gap-4 mt-6">
        <div className="border h-42 border-gray-300 rounded-lg p-4 flex-1 bg-zinc-700 shadow">
          {users}
        </div>
        <div className="border border-gray-300 rounded-lg p-4 flex-1 bg-zinc-700 shadow">
          {revenue}
        </div>
        <div className="border border-gray-300 rounded-lg p-4 flex-1 bg-zinc-700 shadow">
          {notifications}
        </div>
      </div>
    </div>
  ) : (
    login
  );
}

export default ComplexdashboardLayout;
