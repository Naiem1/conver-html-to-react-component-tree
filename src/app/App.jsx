import { Helmet } from "react-helmet";
import AppRouter from "./router";


function App() {
  return (
    <div className="App">
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap&subset=latin-ext"
          rel="stylesheet"
        />
        <link href="'https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
      </Helmet>

      <AppRouter/>
    </div>
  );
}

export default App;
