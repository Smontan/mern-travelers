import { Luggage } from "lucide-react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link
      to={"/"}
      className="inline-flex gap-1 items-center text-2xl font-extrabold "
    >
      <Luggage width={32} height={32} />
      <span className="tracking-tighter">Travelers</span>
    </Link>
  );
};
export default Logo;
