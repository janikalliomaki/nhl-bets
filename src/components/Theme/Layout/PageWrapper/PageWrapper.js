import React from "react";
import { Box, styled } from "../../../Theme";

const PageWrapperBox = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageWrapper = ({ children }) => {
  return <PageWrapperBox>{children}</PageWrapperBox>;
};

export default PageWrapper;
