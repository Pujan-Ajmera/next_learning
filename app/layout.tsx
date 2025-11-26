import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container mt-4 p-4 border rounded shadow-sm" style={{ background: "#fafafa" }}>

  <div className="row align-items-center mb-4 pb-2 border-bottom">
    <div className="col-4">
      <h2 className="m-0">Logo</h2>
    </div>
    <div className="col-8 text-end">
      <nav>
        <a href="#" className="me-3 text-decoration-none">Home</a>
        <a href="#" className="me-3 text-decoration-none">About</a>
        <a href="#" className="text-decoration-none">Contact</a>
      </nav>
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-4">
      <h4>XYZ</h4>
    </div>
    <div className="col-8">
      <div className="p-4 border rounded shadow-sm bg-white">
        {children}
      </div>
    </div>
  </div>

</div>


      </body>
    </html>
  );
}
