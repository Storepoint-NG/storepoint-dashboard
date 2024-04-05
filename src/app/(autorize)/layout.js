export default function AuthLayout({ children }) {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl  text-primary font-bold text-center mt-5">
        Storepoint.
      </h1>
      <div className="md:w-2/5 mx-auto">{children}</div>
    </div>
  );
}
