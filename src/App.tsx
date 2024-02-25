import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Products} from './Pages/Products';
import {Users} from './Pages/Users';
import Verification from './Pages/Verification ';
import { Nav } from './Component/Nav';
import { Provider } from 'react-redux';
import store from './Pages/Store';

 const App: React.FC = () => (
	<BrowserRouter>
	<Nav/>
	<Provider store={store}>
		<Routes>
			<Route path="/products" element={<Products/>} />
			<Route path="/users" element={<Users/>} />
			<Route path="/verification" element={<Verification/>} />
		</Routes>
		</Provider>
	</BrowserRouter>
);
export default App;