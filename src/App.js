import React from "react";
import { Admin, Resource } from "react-admin";
import { TITLE } from "./providers/attrs";
import data from "./providers/data";
import personel from "./resources/personel";
import jenis_personel from "./resources/jenis_personel";
import jenis_kelamin from "./resources/jenis_kelamin";

const App = () => (
  <Admin title={TITLE} dataProvider={data}>
    <Resource {...personel} />
    <Resource {...jenis_personel} />
    <Resource {...jenis_kelamin} />
  </Admin>
);

export default App;
