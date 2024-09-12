import { css } from "@styled-system/css";
import {
  createRootRoute,
  Link,
  Outlet,
  // useMatch,
} from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => {
    const menuStyle = css({
      position: "absolute",
      display: "flex",
      gap: "24px",
      fontWeight: "light",
      padding: "0px 24px",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      zIndex: "100",
      width: "100%",
      backgroundColor: "#fff",
    });

    const toggleStyle = css({
      padding: "4px",
      "&.active": { borderBottom: "3px solid #b72cf2", fontWeight: "600" },
    });

    const blackStyle = css({
      width: "100%",
      height: "35px",
    });
    return (
      <>
        <div className={menuStyle}>
          <Link to="/" className={toggleStyle}>
            Home
          </Link>{" "}
          <Link to="/flow" className={toggleStyle}>
            About
          </Link>
        </div>
        <div className={blackStyle}></div>
        <Outlet />
        {/* <TanStackRouterDevtools /> */}
      </>
    );
  },
});
