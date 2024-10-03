import { useQuery } from "@apollo/client";
import "./App.css";
import MainShowcase from "./components/MainShowcase";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import CookieConsent from "./components/CookieConsent";
import TrafficMap from "./components/TrafficMap";
import AboutSection from "./components/AboutSection";
import React, { useRef } from "react";
import Spinner from "./components/Spinner";
import { GET_MATCHES } from "./queries/matchQueries";

function App() {
  const mapRef = useRef(null);
  const { loading, error, data } = useQuery(GET_MATCHES);

  if (loading) return <Spinner />;
  if (error) {
    console.error("GraphQL error:", error);
    return (
      <p className="text-center text-xl text-red-500">Erro: {error.message}</p>
    );
  }

  const { matches } = data;

  const startOfToday = new Date().setHours(0, 0, 0, 0);

  const futureMatches = matches
    .filter((match) => {
      const matchDate = parseInt(match.date);
      return matchDate >= startOfToday;
    })
    .sort((a, b) => parseInt(a.date) - parseInt(b.date));

  console.log("futureMatches: ", futureMatches);
  // Pega o primeiro jogo da lista (o mais próximo)
  const nextMatch = futureMatches.length > 0 ? futureMatches[0] : null;

  console.log("nextMatch: ", nextMatch);

  return (
    <div className="App">
      <HeaderSection />
      {nextMatch ? (
        <MainShowcase match={nextMatch} mapRef={mapRef} />
      ) : (
        <p className="text-center text-xl">
          Não há jogos ou eventos agendados.
        </p>
      )}
      <AboutSection text="O Eventos na Arena é um site que ajuda você a planejar sua vida com base nas atividades da Arena MRV. Ele foi pensado a partir da necessidade dos moradores do bairro Califórnia e arredores a planejar sua vida, especialmente em dias de eventos que acontecem na Arena." />
      <TrafficMap ref={mapRef} />
      {/*       <DisclaimerSection text="Os moradores da região vêm sofrido com a falta de infraestrutura do bairro, principalmente no que tange mobilidade urbana." />
       */}{" "}
      <FooterSection />
      <CookieConsent />
    </div>
  );
}

export default App;
