import React from "react";
import { TextInput, DateInput } from "react-admin";
import personel_fields from "../personel_fields";

const { tempat_lahir, tanggal_lahir } = personel_fields;

const TempatTanggalLahirInput = (props) => {
  return (
    <span>
      <TextInput {...tempat_lahir} {...props} />
      &nbsp;
      <DateInput {...tanggal_lahir} {...props} />
    </span>
  );
};

export default TempatTanggalLahirInput;
