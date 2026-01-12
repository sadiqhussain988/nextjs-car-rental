export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center">
      {children}
    </div>
  );
}
