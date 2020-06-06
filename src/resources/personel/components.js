import React from "react";
import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";
import personel_fields from "./personel_fields";
import TempatTanggalLahirInput from "./helpers/TempatTanggalLahirInput";

const { id, nama, no_identitas } = personel_fields;

const create = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput {...nama} />
        <NumberInput {...no_identitas} />
        <TempatTanggalLahirInput />
      </SimpleForm>
    </Create>
  );
};

export default { create };
