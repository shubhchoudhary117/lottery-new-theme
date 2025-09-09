import React, { useState } from "react";
import "./OpenCloseRadio.scss";

const OpenCloseRadio = () => {
            const [selected, setSelected] = useState("open");

            return (
                        <div className="toggle-container">
                                    <button
                                                className={`toggle-btn ${selected === "open" ? "active" : ""}`}
                                                onClick={() => setSelected("open")}
                                    >
                                                <span className="circle"></span>
                                                Open
                                    </button>

                                    <button
                                                className={`toggle-btn ${selected === "close" ? "active" : ""}`}
                                                onClick={() => setSelected("close")}
                                    >
                                                <span className="circle"></span>
                                                Close
                                    </button>
                        </div>
            );
};

export default OpenCloseRadio;
