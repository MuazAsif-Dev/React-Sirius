import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="flex min-h-dvh flex-col">
      <div className="flex-1">
        <Outlet />
      </div>
    </main>
  );
}
