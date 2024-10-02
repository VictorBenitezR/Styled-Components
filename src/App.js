import React, { useState, useEffect } from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

console.log(temaClaro, temaOscuro);
function App() {
  // Estado inicial: comprobamos si hay un tema guardado en localStorage
  const [tema, setTema] = useState(() => {
    const temaGuardado = localStorage.getItem("tema"); // Obtener tema desde localStorage
    return temaGuardado ? JSON.parse(temaGuardado) : true; // Si no hay, por defecto tema claro (true)
  });

  const toggleTema = () => {
    setTema((temaAnterior) => {
      const nuevoTema = !temaAnterior;
      localStorage.setItem("tema", JSON.stringify(nuevoTema)); // Guardar tema en localStorage
      return nuevoTema;
    });
  };

  useEffect(() => {
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado) {
      setTema(JSON.parse(temaGuardado)); // Si hay un tema guardado, lo aplicamos
    }
  }, []);

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
