import "./App.css";
import Courses from "./Courses";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://vm8mjvrnv3.lp.gql.zone/graphql",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <nav className="navbar navbar-dark bg-primary">
          <a href="#" className="navbar-brand">
            React & GraphQL - Simple Application
          </a>
        </nav>
        <div>
          <Courses />
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
