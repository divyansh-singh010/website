import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import { Home } from './pages/home/home';
import { Allclubs } from './pages/allclubs/allclubs';
import { Allsociety } from './pages/allsociety/allsociety';
import { Core } from './pages/team/core';
import { Meetings } from './pages/meetings/meetings';
import { UsefulLinks } from './pages/usefulLinks/usefulLinks';
import { OneSociety } from './pages/oneSociety/oneSociety';
import { OneClub } from './pages/oneClub/oneClub';
import { Events } from './pages/events/events';
import { Tryst } from './pages/tryst/tryst';
import { OneEvent } from './pages/oneEvent/oneEvent';
import { UGconvenor } from '.pages/team/ugconvenor';
import { PGconvenor } from '.pages/team/pgconvenor';
import onlyClubs from './clubs.json';
import onlySocs from './societies.json';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Home />
						</>
					}
				></Route>
				<Route
					path='/clubs'
					element={
						<>
							<Allclubs />
						</>
					}
				></Route>
				<Route
					path='/societies'
					element={
						<>
							<Allsociety />
						</>
					}
				></Route>
				<Route
					path='/core'
					element={
						<>
							<Core />
						</>
					}
				></Route>
				<Route
					path='/convenor/ug'
					element={
						<>
							<UGconvenor />
						</>
					}
				></Route>
				<Route
					path='/convenor/pg'
					element={
						<>
							<PGconvenor />
						</>
					}
				></Route>
				<Route
					path='/meetings'
					element={
						<>
							<Meetings />
						</>
					}
				></Route>
				<Route
					path='/events'
					element={
						<>
							<Events />
						</>
					}
				></Route>
				<Route
					path='/tryst'
					element={
						<>
							<Tryst />
						</>
					}
				></Route>
				<Route
					path='/usefulLinks'
					element={
						<>
							<UsefulLinks />
						</>
					}
				></Route>
				<Route
					path='/clubs/devclub'
					element={
						<>
							<OneClub props='devclub' />
						</>
					}
				></Route>
				{onlySocs.map((soc, id) => {
					return (
						<Route
							key={id}
							path={`/society/${soc.info.link}`}
							element={
								<>
									<OneClub props={soc} />
								</>
							}
						></Route>
					);
				})}
				<Route
					path='/one-society'
					element={
						<>
							<OneSociety />
						</>
					}
				></Route>
				<Route
					exact
					path='/getevent/:club/:id'
					element={
						<>
							<OneEvent />
						</>
					}
				></Route>

				{onlyClubs.map((club, id) => {
					return (
						<Route
							key={id}
							path={`/club/${club.info.link}`}
							element={
								<>
									<OneClub props={club} />
								</>
							}
						></Route>
					);
				})}
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
