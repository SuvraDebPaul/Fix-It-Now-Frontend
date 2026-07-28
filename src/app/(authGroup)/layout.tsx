const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="h-15">Navigation Menu</header>
      <main>{children}</main>
    </>
  );
};

export default Authlayout;
