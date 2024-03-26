import React from 'react';
import Layout from '@theme-original/Layout';

import { Crisp } from "crisp-sdk-web";
import ReactGA from "react-ga4";

Crisp.configure("0c6dfde1-978e-4f29-959f-9a9886863e4f");
ReactGA.initialize("G-C7W0T4C3ZR");

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
    </>
  );
}
