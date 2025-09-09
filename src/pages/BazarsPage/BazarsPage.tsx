import React, { useState, Suspense, lazy } from "react";
import "./BazarsPage.scss";
import Header from "../../components/AppHeader/Header";
import GameTabs from "../../components/GameTabs/GameTabs";
import Loader from "../../components/Loader/Loader";


// Lazy imports
const RegularBazar = lazy(() =>
  import("./Bazars/RegularBazar/RegularBazar")
);
const KingBazar = lazy(() =>
  import("./Bazars/KingBazar/KingBazar")
);
const StarLineBazar = lazy(() =>
  import("./Bazars/StarLineBazar/StarLineBazar")
);
const InstantWorli = lazy(() =>
  import("./Bazars/InstantWorli/InstantWorli")
);

const Bazars = () => {
  const [bazarType, setBazarType] = useState<string>("Regular Bazar");
 
  const handleBazarClick = (activeBazar: string) => {
    setBazarType(activeBazar);
  };

  return <>
    <Header isGame={false}/>
    <div className="home-page-section">
      <GameTabs handleBazarClick={handleBazarClick} activeBazar={bazarType} />

      {/* Fallback loader while component loads */}
      <Suspense fallback={<Loader />}>
        {bazarType === "Regular Bazar" && <RegularBazar />}
        {bazarType === "King Bazar" && <KingBazar />}
        {bazarType === "Starline Bazar" && <StarLineBazar />}
        {bazarType === "Instant Worli" && <InstantWorli />}
      </Suspense>
    </div>
  </>
};

export default Bazars;
