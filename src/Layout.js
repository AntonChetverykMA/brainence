import Header from './components/Header/Header';

function Layout(props) {
  return (
    <div className='Layout'>
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
