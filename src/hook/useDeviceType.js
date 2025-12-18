import { useMediaQuery } from "./useMediaQuery";

export function useDeviceType() {
  const isDesktop = useMediaQuery("(min-width: 1440px)");
  const isTablet = useMediaQuery(
    "(min-width: 700px) and (max-width: 1439px)"
  );
  const isMobile = useMediaQuery(
    "(min-width: 360px) and (max-width: 699px)"
  );
  const isSmallMobile = useMediaQuery("(max-width: 359px)");

  let deviceType = "desktop";
  if (isDesktop) deviceType = "desktop";
  else if (isTablet) deviceType = "tablet";
  else if (isMobile) deviceType = "mobile";
  else if (isSmallMobile) deviceType = "smallMobile";

  return {
    deviceType,
    isDesktop,
    isTablet,
    isMobile,
    isSmallMobile,
  };
}
