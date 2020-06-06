import React from "react";
import { Admin, Resource } from "react-admin";
import { TITLE } from "./providers/attrs";
import data from "./providers/data";
import personel from "./resources/personel";
import jenis_personel from "./resources/jenis_personel";

const App = () => (
  <Admin title={TITLE} dataProvider={data}>
    <Resource {...personel} />
    <Resource {...jenis_personel} />
  </Admin>
);

export default App;
