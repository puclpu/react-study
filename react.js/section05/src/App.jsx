import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() { // 부모 컴퍼넌트
  return (
    <>
      {/* App 컴퍼넌트를 랜더링할 때, Header 컴퍼넌트도 함께 렌더링 됨 */}
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
