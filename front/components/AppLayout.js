import Reactm, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Router from 'next/router';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import useInput from '../hooks/useInput';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const [searchInput, onChangeSearchInput] = useInput('');
  const { me } = useSelector((state) => state.user);

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  const menuItems = [
    {
      key: 'Home',
      icon: <Link href="/"><a>Home</a></Link>,
    },
    {
      key: 'Profile',
      icon: <Link href="/profile"><a>Profile</a></Link>,
    },
    {
      key: 'Search',
      icon: <SearchInput enterButton value={searchInput} onChange={onChangeSearchInput} onSearch={onSearch} />,
    },
  ];
  return (
    <div>
      <Menu mode="horizontal" items={menuItems} />
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://github.com/rgy0924" target="_blank" rel="noreferrer noopener">Giyun Roh</a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
