// placeBet.service.ts
import { lazy } from "react";
import { getToken } from "../../services/token.service";
import { AKDA_APIs } from "../../APIs/akda-apis/AKDA_APIs";
import { decryptData } from "../../util/cryptoUtils";

// normalize function
export const normalizeGameName = (name: string): string => {
  return name
    .toUpperCase()
    .replace(/PANA|PATTI/g, (m) => (m === "PANA" ? "PANA" : "PATTI"))
    .replace(/MOTOR/g, "MOTER")
    .trim();
};

// Lazy components map
const componentMap: Record<string, any> = {
  "SINGLE AKDA": lazy(() => import("../../components/games-list/SingleAkda/SingleAkda")),
  "SINGLE PATTI": lazy(() => import("../../components/games-list/SinglePatti/SinglePatti")),
  "DOUBLE PATTI": lazy(() => import("../../components/games-list/DoublePatti/DoublePatti")),
  "TRIPLE PATTI": lazy(() => import("../../components/games-list/TriplePatti/TriplePatti")),
  "SP MOTER": lazy(() => import("../../components/games-list/SPMoter/SPMoter")),
  "DP MOTER": lazy(() => import("../../components/games-list/DPMoter/DPMoter")),
  "JODI": lazy(() => import("../../components/games-list/Jodi/Jodi")),
  "GROUP JODI": lazy(() => import("../../components/games-list/GroupJodi/GroupJodi")),
  "JODI COUNT": lazy(() => import("../../components/games-list/JodiCount/JodiCount")),
  "DIGIT BASED JODI": lazy(() => import("../../components/games-list/DigitBasedJodi/DigitBasedJodi")),
  "CHOICE PANNA": lazy(() => import("../../components/games-list/ChoicePana/ChoicePana")),
  "RED BRACKET": lazy(() => import("../../components/games-list/RedBracket/RedBracket")),
  "TWO DIGIT PANEL(CP,SR)": lazy(() => import("../../components/games-list/TwoDigitPanel/TwoDigitPanel")),
  "PANA DIFFERENCE": lazy(() => import("../../components/games-list/PanaDifference/PanaDifference")),
  "PANA FAMILY": lazy(() => import("../../components/games-list/PanaFamily/PanaFamily")),
  "PRIME JODI": lazy(() => import("../../components/games-list/PrimeJodi/PrimeJodi")),
  "HALF RED": lazy(() => import("../../components/games-list/HalfRed/HalfRed")),
  "EVEN ODD PANA": lazy(() => import("../../components/games-list/EvenOddPana/EvenOddPana")),
  "FAVOURITE PATTI": lazy(() => import("../../components/games-list/FavoritePatti/FavoritePatti")),
  "52 PANA CHART": lazy(() => import("../../components/games-list/PanaChart52/PanaChart52")),
  "56 PANA CHART": lazy(() => import("../../components/games-list/PanaChart56/PanaChart56")),
  "77 PANA 9 CUT CHART": lazy(() => import("../../components/games-list/Pana77Cut9Chart/Pana77Cut9Chart")),
  "ALL FIGURE HALF RED PANA": lazy(() => import("../../components/games-list/AllFigureHalfRed/AllFigureHalfRed")),
  "LINE PANA CHART": lazy(() => import("../../components/games-list/LinePanaChart/LinePanaChart")),
  "NON FAVOURITE PANA": lazy(() => import("../../components/games-list/NonFavoritePana/NonFavoritePana")),
  "TOUCH(CHIPKE PANA)": lazy(() => import("../../components/games-list/TouchPanaChipke/TouchPanaChipke")),
  "UNTOUCH(BHIKRE PANA)": lazy(() => import("../../components/games-list/UnTouchBhikrePana/UnTouchBhikrePana")),
  "HALF SANGAM": lazy(() => import("../../components/games-list/HalfSangam/HalfSangam")),
  "FULL SANGAM": lazy(() => import("../../components/games-list/FullSangam/FullSangam")),
  "ABR 100": lazy(() => import("../../components/games-list/ABR100/ABR100")),
  "ABR CUT": lazy(() => import("../../components/games-list/ABRCut/ABRCut")),
//   "FIRST DIGIT(EKAI)": lazy(() => import("../../components/games-list/FirstDigit(Ekai)/FirstDigit(Ekai)")),
//   "SECOND DIGIT(HARUF)": lazy(() => import("../../components/games-list/SecondDigitHaruf/SecondDigitHaruf")),
//   "SINGLE DIGIT": lazy(() => import("../../components/games-list/SinglePatti/SingleJodi")),
  "CHOICE PANA": lazy(() => import("../../components/games-list/ChoicePana/ChoicePana")),
  "TWO DIGIT PANEL SP": lazy(() => import("../../components/games-list/TwoDigitPanel/TwoDigitPanel")),
};

// Get component by game name
export const getComponent = (gameName: string) => {
  const key = normalizeGameName(gameName);
  return componentMap[key] || null;
};

// Prepare Akda Types
export const prepareAkdaTypes = (allAkdas: any[]) => {
  const gamesByName = allAkdas.reduce((acc: any, game: any) => {
    acc[game.gameName] = game;
    return acc;
  }, {} as any);
  return { akdasNames: Object.keys(gamesByName), allAkdasData: gamesByName };
};


export const getTableData = async (akda: any) => {
  let token = getToken();
  let payload = { listId: akda?._id };

  return AKDA_APIs.getAkda_Table_Info(payload, token)
    .then((response: any) => {
      let API_Response = decryptData(response.data.data);
      console.log(API_Response)
      return API_Response?.payload?.values;
    })
    .catch((error:any) => {
      console.log(error);
      return [];
    });
};
