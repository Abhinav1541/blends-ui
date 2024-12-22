import { Navbar } from "./components/ui/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { Footer } from "./components/sections/Footer/Footer";
import { Sentosa } from "./pages/Sentosa";
import { Company } from "./pages/Company";
import { WorkDatabase } from "./utils/WorkDatabase";

function App() {
  return (
    <div className="bg-black relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route
          path="/work/sentosa"
          element={<Company data={WorkDatabase["Sentosa Realty"]} />}
        />
        <Route
          path="/work/liveplay"
          element={<Company data={WorkDatabase["Liveplay"]} />}
        />
        <Route
          path="/work/daulat"
          element={<Company data={WorkDatabase["Daulat"]} />}
        />
        <Route
          path="/work/exogear"
          element={<Company data={WorkDatabase["Exogear"]} />}
        />
        <Route
          path="/work/bharattransit"
          element={<Company data={WorkDatabase["BharatTransit"]} />}
        />
        <Route
          path="/work/surge"
          element={<Company data={WorkDatabase["Surge"]} />}
        />
        <Route
          path="/work/cuteiclesandlyor"
          element={<Company data={WorkDatabase["Cute"]} />}
        />
        <Route
          path="/work/matrix"
          element={<Company data={WorkDatabase["Matrix"]} />}
        />
        <Route
          path="/work/aasaan"
          element={<Company data={WorkDatabase["Aasaan"]} />}
        />
        <Route
          path="/work/tshirt"
          element={<Company data={WorkDatabase["Tshirt"]} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
