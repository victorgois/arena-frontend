import "./App.css";
import MainShowcase from "./components/MainShowcase";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import CookieConsent from "./components/CookieConsent";
import TrafficMap from "./components/TrafficMap";
import AboutSection from "./components/AboutSection";
import React, { useRef } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";

function App() {
  const mapRef = useRef(null);

  return (
    <div className="App">
      <HeaderSection />
      <ApolloProvider client={client}>
        <MainShowcase mapRef={mapRef} />
      </ApolloProvider>
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
