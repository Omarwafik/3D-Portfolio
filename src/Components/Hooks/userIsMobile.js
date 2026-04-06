import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 770);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 770);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreen;
};

export default useIsMobile;
