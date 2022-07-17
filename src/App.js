import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import GlobalTheme from "./themes/GlobalTheme";
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
import { Home, Room, Settings, Error } from './components/views'


function App() {
  return (
    <BrowserRouter>
      <GlobalTheme />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/error" index element={<Error />} />
        <Route path="/settings" index element={<Settings />} />
        <Route path="/rooms/:id" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
