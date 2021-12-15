import './App.css';
import Enter from './pages/Enter';
import Main from './pages/Main';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* redirect to /enter */}
      {/* /는 메인 */}
      <Routes>
        <Route path="/" element={<Navigate replace to="/enter" />} />
        <Route path="/main" element={<Main />} />
        <Route path="/enter" element={<Enter />} />
      </Routes>
      {/* <Main /> */}
    </div>
  );
}

export default App;
