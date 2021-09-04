import React, { useState, useEffect } from "react";
function CoronaVirusApi() {
  useEffect(() => {
    fecthData();
  }, []);

  const [coronaData, setData] = useState([]);

  const fecthData = async () => {
    const data = await fetch(
      "https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
    );
    const items = await data.json();
    console.log(items.features);
    setData(items.features);
  };

  return (
    <div>
      <h1>Testing Fecth Api, Corona Virus</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">NO</th>
            <th scope="col">Meninggal</th>
            <th scope="col">Positif</th>
            <th scope="col">Sembuh</th>
            <th scope="col">Kode Provinsi</th>
            <th scope="col">Provinsi</th>
          </tr>
        </thead>
        <tbody>
          {coronaData.map((dataCorona) => {
            console.log(dataCorona.attributes["Provinsi"]);
            const {
              FID,
              Kasus_Meni,
              Kasus_Posi,
              Kasus_Semb,
              Kode_Provi,
              Provinsi,
            } = dataCorona.attributes;
            return (
              <tr>
                <th scope="row">{FID}</th>
                <td>{Kasus_Meni}</td>
                <td>{Kasus_Posi}</td>
                <td>{Kasus_Semb}</td>
                <td>{Kode_Provi}</td>
                <td>{Provinsi}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CoronaVirusApi;
