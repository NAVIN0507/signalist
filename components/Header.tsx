import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return <header className="sticky top-0 header">
    <div className="container header-wrapper">
      <Link href={"/"}> 
      <Image src={"/assets/images/logo.png"} alt="logo" width={140} height={32} className="h-8 w-auto cursor-pointer"/>
      </Link>
      <nav className="hidden sm:block">
        
      </nav>
    </div>
  </header>;
};

export default Header;
