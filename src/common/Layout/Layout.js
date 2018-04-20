import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/color'
import logo from '../../logo.svg'
import { Layout, Menu, Icon } from 'antd'
const { Header, Footer, Sider, Content } = Layout

const LayoutStyle = styled(Layout)`
  min-height: 100vh;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const UserContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`

const FooterStyle = styled(Footer)`
  text-align: center;
`

const LayoutApp = props => {
  // console.log('props: ', props)
  return (
    <LayoutStyle>
      <Sider
        width={220}
        style={{ backgroundColor: colors.blue6, color: colors.white }}
      >
        <LogoContainer>
          <Link to="/login">
            <img alt="logo" height="50px" src={logo} />
          </Link>
        </LogoContainer>
        <UserContainer>
          <Icon type="user" style={{ fontSize: 36 }} />
          <p>Username</p>
          <Link to="/login">
            <Icon
              type="logout"
              style={{
                position: 'absolute',
                right: 20,
                bottom: 15,
                cursor: 'pointer',
                color: colors.white
              }}
              title="Logout"
            />
          </Link>
        </UserContainer>
        <Menu
          mode="inline"
          style={{
            borderRight: 0,
            textAlign: 'left',
            backgroundColor: colors.blue6
          }}
          selectedKeys={[props.location.pathname]}
        >
          <Menu.Item
            key="/home"
            style={{
              backgroundColor: colors.white
            }}
          >
            <Link to="/home">
              <Icon type="user" style={{ color: colors.blue6 }} />
              <span>Home</span>
            </Link>
          </Menu.Item>

          <Menu.Item
            key="/test"
            style={{
              backgroundColor: colors.white
            }}
          >
            <Link to="/test">
              <Icon type="meh-o" style={{ color: colors.blue6 }} />
              <span>Test</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            backgroundColor: colors.blue6,
            textAlign: 'right',
            color: colors.white
          }}
        >
          Arm
        </Header>
        <Content>{props.children}</Content>
        <FooterStyle>Copyright © 2018, All Rights Reserved.</FooterStyle>
      </Layout>
    </LayoutStyle>
  )
}

export default LayoutApp