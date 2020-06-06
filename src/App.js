import React from "react";
import { Admin, Resource } from "react-admin";
import { TITLE } from "./providers/attrs";
import data from "./providers/data";
import personel from "./resources/personel";
import jenis_personel from "./resources/jenis_personel";
import jenis_kelamin from "./resources/jenis_kelamin";
import golongan_darah from "./resources/golongan_darah";
import jenjang_kepangkatan from "./resources/jenjang_kepangkatan";
import pangkat from "./resources/pangkat";

const App = () => (
  <Admin title={TITLE} dataProvider={data}>
    <Resource {...personel} />
    <Resource {...jenis_personel} />
    <Resource {...jenis_kelamin} />
    <Resource {...golongan_darah} />
    <Resource {...pangkat} />
    <Resource {...jenjang_kepangkatan} />
  </Admin>
);

export default App;
