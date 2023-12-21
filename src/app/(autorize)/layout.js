export default function AuthLayout({ children }) {
  return (
    <div>
      <h1 className="text-4xl font-mono text-blue-900  font-black text-center mt-5">
        Storepoint.
      </h1>
      {children}
    </div>
  );
}
