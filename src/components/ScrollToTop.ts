import { useEffect } from "react";
import { useLocation, useNavigation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigation]);
  return null;
};
