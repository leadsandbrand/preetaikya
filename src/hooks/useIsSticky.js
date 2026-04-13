import { useEffect, useState } from "react";

const useIsSticky = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);  // 🔥 after scroll
      } else {
        setIsSticky(false); // top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isSticky;
};

export default useIsSticky;