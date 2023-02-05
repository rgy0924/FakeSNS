import React, { useCallback } from 'react';
import { Avatar, Button, Card } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { logoutRequestAction } from '../reducers/user';

const ButtonWrapper = styled.div`
  margin-Top: 10px;
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="post"><Link href={`/user/${me.id}`}><a>Posts<br />{me.Posts.length}</a></Link></div>,
        <div key="followings"><Link href={`/profile`}><a>Following<br />{me.Followings.length}</a></Link></div>,
        <div key="followers"><Link href={`/profile`}><a>Follower<br />{me.Followers.length}</a></Link></div>,
      ]}
    >
      <Card.Meta
        avatar={(
          <Link href={`/user/${me.id}`}>
            <a><Avatar>{me.nickname[0]}</Avatar></a>
          </Link>
        )}
        title={me.nickname}
      />
      <ButtonWrapper>
        <Button onClick={onLogOut} loading={logOutLoading}>Log Out</Button>
      </ButtonWrapper>
    </Card>
  );
};

export default UserProfile;
