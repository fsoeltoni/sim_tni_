import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  FormDataConsumer,
} from "react-admin";
import personel_fields from "./personel_fields";
import JenisPersonelInput from "./helpers/JenisPersonelInput";
import TempatTanggalLahirInput from "./helpers/TempatTanggalLahirInput";
import NoIdentitasInput from "./helpers/NoIdentitasInput";
import JenjangKepangkatanPangkatKorpsInput from "./helpers/JenjangKepangkatanPangkatKorpsInput";

const {
  jenis_personel,
  nama,
  jenis_kelamin,
  golongan_darah,
  alamat,
  jabatan,
  no_kt_prajurit,
} = personel_fields;

const create = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <JenisPersonelInput />
        <TextInput {...nama} />
        <NoIdentitasInput />
        <TempatTanggalLahirInput />
        <ReferenceInput {...jenis_kelamin}>
          <SelectInput optionText="nama" />
        </ReferenceInput>
        <ReferenceInput {...golongan_darah}>
          <SelectInput optionText="nama" />
        </ReferenceInput>
        <TextInput {...alamat} />
        <JenjangKepangkatanPangkatKorpsInput />
        <TextInput {...jabatan} />
        <FormDataConsumer subscription={{ values: true }}>
          {({ formData, ...rest }) =>
            formData[jenis_personel.source] &&
            formData[jenis_personel.source] === 1 && (
              <TextInput {...no_kt_prajurit} {...rest} />
            )
          }
        </FormDataConsumer>
      </SimpleForm>
    </Create>
  );
};

export default { create };
