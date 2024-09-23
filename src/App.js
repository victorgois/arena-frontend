import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import "./App.css";
import MainShowcase from "./components/MainShowcase";
import TrafficMap from "./components/TrafficMap";
import HeaderSection from "./components/HeaderSection";
import AboutSection from "./components/AboutSection";
import DisclaimerSection from "./components/DisclaimerSection";
import FooterSection from "./components/FooterSection";
const GET_MATCHES = gql`
  query {
    matches {
      championship
      date
      detailsLink
      venue
      homeTeam {
        name
        abbreviation
        logoUrl
      }
      awayTeam {
        name
        abbreviation
        logoUrl
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_MATCHES);

  if (loading) return <p className="text-center text-xl">Carregando...</p>;
  if (error) {
    console.error("GraphQL error:", error);
    return (
      <p className="text-center text-xl text-red-500">Erro: {error.message}</p>
    );
  }

  const { matches } = data;

  const nextMatch = matches.find((match) => match.date > Date.now());

  return (
    <div className="App">
      <HeaderSection />
      {nextMatch ? (
        <MainShowcase match={nextMatch} />
      ) : (
        <p className="text-center text-xl">
          Não há jogos ou eventos agendados.
        </p>
      )}
      <DisclaimerSection />
      <FooterSection />
    </div>
  );
}

export default App;
