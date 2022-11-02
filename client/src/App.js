<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import SavedFoods from './pages/SavedFoods';
// import SearchFoods from './pages/SearchFoods';
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/Login"
            element={<Login />}
          />
          <Route
            path="/Signup"
            element={<Signup />}
          />
          {/* <Route
            path="/SavedFoods"
            element={<SavedFoods />}
          /> */}
          {/* <Route
            path="/SearchFoods"
            element={<SearchFoods />}
          /> */}
        </Routes>
      </Router>
    </ApolloProvider>
>>>>>>> bethany
  );
}

export default App;
