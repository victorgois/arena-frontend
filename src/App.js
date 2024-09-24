import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import "./App.css";
import MainShowcase from "./components/MainShowcase";
import DisclaimerSection from "./components/DisclaimerSection";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import CookieConsent from "./components/CookieConsent";

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

  const now = Date.now();

  // Converte o timestamp string para número e filtra os jogos futuros
  const futureMatches = matches
    .filter((match) => parseInt(match.date) > now)
    .sort((a, b) => parseInt(a.date) - parseInt(b.date));

  console.log(futureMatches);
  // Pega o primeiro jogo da lista (o mais próximo)
  const nextMatch = futureMatches.length > 0 ? futureMatches[0] : null;

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
      <CookieConsent />
    </div>
  );
}

export default App;
