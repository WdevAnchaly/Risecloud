import Header from './common/header/header';
import Footer from './common/footer/footer'

const App = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer/>
    </>
  );
}

export default App;
