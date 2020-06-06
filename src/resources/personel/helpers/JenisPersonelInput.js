import React from "react";
import { ReferenceInput, SelectInput } from "react-admin";
import { useForm } from "react-final-form";
import personel_fields from "../personel_fields";

const { jenis_personel, jenjang_kepangkatan } = personel_fields;

const JenisPersonelInput = (props) => {
  const form = useForm();

  const onChange = (e) => {
    form.change(jenjang_kepangkatan.source, null);
  };

  return (
    <ReferenceInput {...jenis_personel} {...props} onChange={onChange}>
      <SelectInput optionText="nama" />
    </ReferenceInput>
  );
};

export default JenisPersonelInput;
