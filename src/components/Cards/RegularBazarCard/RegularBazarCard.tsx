import React, { useEffect, useRef, useState } from "react";
import "./RegularBazarCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { RegularBazarService } from "../../../pages/BazarsPage/Bazars/RegularBazar/regular-bazar.service";
import {  Tv } from "lucide-react";
import clockIcon from "./images/clock.svg";
import DefaultImage from "../../../assets/images/defaultBazarImage.webp"

type DataType = {
  data: {
    bazarImg: string;
    bazarName: string;
    openTime: string;
    closeTime: string;
    openDate: string[];
    closeDate: string[];
    _id:string;
  };
};

const RegularBazarCard: React.FC<DataType> = ({ data }) => {
  const bazarStatus = RegularBazarService.getRunningStatus(data?.closeTime);
  const [bazarRemainingTimes, setBazarRemainingTimes] = useState({
    openRemainingTime: { hours: 0, minutes: 0, seconds: 0 },
    closeRemainingTime: { hours: 0, minutes: 0, seconds: 0 },
  });

  const inferTimer = (day: string, fixedDateStr: string) => {
    try {
      const fixedDateTime = new Date(`${day} ${fixedDateStr}`);
      const nowDate = new Date();
      let duration = fixedDateTime.getTime() - nowDate.getTime();

      if (duration < 0) {
        const nextDay = new Date(fixedDateTime);
        nextDay.setDate(nextDay.getDate() + 1);
        duration = nextDay.getTime() - nowDate.getTime();
      }
      return duration;
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  const convertToTime = (remainingTime: number) => {
    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    return { hours, minutes, seconds };
  };

  const calculateRemainingTimes = () => {
    const openDay = data?.openDate?.[0];
    const fixedOpenTime = data?.openTime;
    const closeDay = data?.closeDate?.[0];
    const fixedCloseTime = data?.closeTime;

    const openRemainingTime = inferTimer(openDay, fixedOpenTime);
    const closeRemainingTime = inferTimer(closeDay, fixedCloseTime);

    setBazarRemainingTimes({
      openRemainingTime: convertToTime(openRemainingTime),
      closeRemainingTime: convertToTime(closeRemainingTime),
    });
  };

  // run once on mount
  useEffect(() => {
    calculateRemainingTimes();
  }, []);

  // run on interval
  useInterval(() => {
    calculateRemainingTimes();
  }, 1000);

  function useInterval(callback: () => void, delay: number) {
    const callbackRef = useRef(callback);

    useEffect(() => {
      callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
      if (delay !== null) {
        const id = setInterval(() => callbackRef.current(), delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  return (
    <Link to={"/markets"} state={{marketId:data?._id}} className="Link">
      <div className="satta-market-card">
        <LazyLoadImage
          className="satta-market-card-img"
          src={data?.bazarImg?data?.bazarImg:DefaultImage}
        />
        <div className="bazar-content-container">
          <div className="bazar-details">
            <div className="bazar-name">{data?.bazarName}</div>
            <div className="bazar-rate">
              {`${bazarRemainingTimes.openRemainingTime.hours}h ${bazarRemainingTimes.openRemainingTime.minutes}m ${bazarRemainingTimes.openRemainingTime.seconds}s`}
            </div>
            <div className="runnig-mssg">{bazarStatus}</div>
          </div>
          <div className="bazar-live-details">
            <div className="tv-icon-wrapper">
              <Tv  color={"#E8AA0C"} className="tv-icon" />
            </div>
            <div className="live-tv">LIVE TV</div>
            <div className="result">RESULT</div>
          </div>
        </div>
        <div className="bazar-open-close-box">
          <div className="bazar-open-close-wrapper">
            <div className="bazar-open">
              <div className="bazar-time">{data?.openTime}</div>
              <div className="bazar-status">OPEN</div>
              <div className="runnig-time">
                {`${bazarRemainingTimes.closeRemainingTime.hours}h ${bazarRemainingTimes.closeRemainingTime.minutes}m ${bazarRemainingTimes.closeRemainingTime.seconds}s`}
              </div>
            </div>
            <div className="clock-icon">
              <LazyLoadImage src={clockIcon} className="clock-img"  />
            </div>
            <div className="bazar-close">
              <div className="bazar-time">{data?.closeTime}</div>
              <div className="bazar-status">CLOSE</div>
              <div className="runnig-time">
                {`${bazarRemainingTimes.closeRemainingTime.hours}h ${bazarRemainingTimes.closeRemainingTime.minutes}m ${bazarRemainingTimes.closeRemainingTime.seconds}s`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RegularBazarCard;
