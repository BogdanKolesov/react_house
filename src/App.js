import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import GlobalTheme from "./themes/GlobalTheme";
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';
import { Home } from './components/views'


function App() {
  return (
    <BrowserRouter>
      <GlobalTheme />
      <Routes>
        {/* <Route path="/" element={<App />}> */}
        <Route path="/" index element={<Home />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
