import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';

const FakeSNS = ({ Component }) => (
  <>
    <Head>
      <title>FakeSNS</title>
    </Head>
    <Component />
  </>
);

FakeSNS.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(FakeSNS);
