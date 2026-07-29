import { Navbar } from "@/components/shared/navbar";

const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Authlayout;
