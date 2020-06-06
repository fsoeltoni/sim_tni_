import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";
import personel_fields from "./personel_fields";
import TempatTanggalLahirInput from "./helpers/TempatTanggalLahirInput";
import NoIdentitasInput from "./helpers/NoIdentitasInput";

const {
  id,
  jenis_personel,
  nama,
  no_identitas,
  tempat_lahir,
  tanggal_lahir,
  jenis_kelamin,
} = personel_fields;

const create = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput {...jenis_personel}>
          <SelectInput optionText="nama" />
        </ReferenceInput>
        <TextInput {...nama} />
        <NoIdentitasInput />
        <TempatTanggalLahirInput />
        <ReferenceInput {...jenis_kelamin}>
          <SelectInput optionText="nama" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default { create };
