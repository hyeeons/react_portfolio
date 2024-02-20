import { Outlet } from "react-router-dom";
import styled from "styled-components";
import theme from "../../themes/theme";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export const PfLayout = () => {
  return (
    <>
      <GnbWrap>
        <div className="header">
          <h1>Portfolio</h1>
        </div>
      </GnbWrap>
      <Outlet />
    </>
  );
};

const GnbWrap = styled.div`
  background-color: lightblue;
  width: 282px;
  height: 100vh;
  padding-top: 84px;
  .header {
    width: 237px;
    height: 92px;
    margin: 0 auto;

    border-bottom: 1px solid ${theme.colors.grayF9};
  }
  h1 {
    font-size: 1.875rem;
    font-weight: 700;
    text-align: center;
    padding: 30px 0;
    color: ${theme.colors.orangeVita};
  }
`;
export default Layout;
