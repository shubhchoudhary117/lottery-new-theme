import React from 'react'
import "./PanaTable.scss"

const PantaTable = () => {
  return<>
    <div className="pana-table-section">
        <table className="pana-table">
            <thead>
                <tr>
                    <th>Jodi</th>
                    <th>Points</th>
                    <th>Game Type</th>
                    <th>Delete</th>
                    </tr>
            </thead>
            <tbody>
                <tr>
                    <td>11</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>10</td>
                    <td>10</td>
                    <td>10</td>
                </tr>
               
            </tbody>
        </table>
        <div className="total-pana-and-total-amount-labels">
            <div className="total-panas">Total Number of pana 0</div>
            <div className="total-amount">Total Amount 0.0</div>
        </div>
    </div>
  
  </>
}

export default PantaTable