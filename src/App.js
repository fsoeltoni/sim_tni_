import React from "react";
import { Admin } from "react-admin";
import { TITLE } from "./providers/attrs";
import data from "./providers/data";

const App = () => <Admin title={TITLE} dataProvider={data} />;

export default App;
