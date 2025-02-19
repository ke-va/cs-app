import { Link } from 'react-router-dom';
import { Flex, Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const layoutStyle: React.CSSProperties = {
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
};

const linkStyle: React.CSSProperties = {
  color: '#fff',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  marginRight: 16,
}

const Navbar = () => (
  <Flex gap="middle" wrap>
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <nav className="p-4 bg-blue-600 text-white flex justify-between">
          <Link style={linkStyle} to="/list" className="text-xl font-bold">Posts list</Link>
          <Link style={linkStyle} to="/create" className="text-xl font-bold">Create post</Link>
        </nav>
      </Header>
    </Layout>
  </Flex>
);

export default Navbar;