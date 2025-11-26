export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h1 className="fw-bolder text-center mb-4">ABOUT</h1>
      <div className="p-4 border rounded-3 shadow-sm bg-white">
        {children}
      </div>
    </div>
  );
}
