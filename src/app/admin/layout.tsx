"use client";

import { useAuth } from "@/hooks/useAuth";
import AdminLogin from "@/components/admin/AdminLogin";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, loading, login, logout } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-muted">로딩 중...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={login} />;
  }

  return (
    <div className="pt-20 pb-10 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">어드민</h1>
          <button
            onClick={logout}
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            로그아웃
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
