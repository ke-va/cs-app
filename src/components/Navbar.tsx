import { Link } from 'react-router-dom';
import { Flex, Layout } from 'antd';
import './Navbar.css'

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  padding: 0,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const layoutStyle: React.CSSProperties = {
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
};

const linkStyle: React.CSSProperties = {
  color: '#fff',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  marginRight: 16,
}

const Navbar = () => (
  <Flex gap="middle" wrap>
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <nav>
          <Link style={linkStyle} to="/list" className="responsive-link">Posts list</Link>
          <Link style={linkStyle} to="/create" className="responsive-link">Create post</Link>
          <Link style={linkStyle} to="/delete" className="responsive-link">Delete post</Link>
        </nav>
      </Header>
    </Layout>
  </Flex>
);

export default Navbar;