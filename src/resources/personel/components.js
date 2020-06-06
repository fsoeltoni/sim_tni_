import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  FormDataConsumer,
} from "react-admin";
import personel_fields from "./personel_fields";
import JenisPersonelInput from "./helpers/JenisPersonelInput";
import TempatTanggalLahirInput from "./helpers/TempatTanggalLahirInput";
import NoIdentitasInput from "./helpers/NoIdentitasInput";
import JenjangKepangkatanInput from "./helpers/JenjangKepangkatanInput";

const {
  id,
  jenis_personel,
  nama,
  no_identitas,
  tempat_lahir,
  tanggal_lahir,
  jenis_kelamin,
  golongan_darah,
  jenjang_kepangkatan,
  pangkat,
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
        <JenjangKepangkatanInput />
        <FormDataConsumer subscription={{ values: true }}>
          {({ formData, ...rest }) =>
            formData[jenjang_kepangkatan.source] && (
              <ReferenceInput
                {...pangkat}
                {...rest}
                filter={{
                  jenjang_kepangkatan_id: formData[jenjang_kepangkatan.source],
                }}
              >
                <SelectInput optionText="kode" />
              </ReferenceInput>
            )
          }
        </FormDataConsumer>
      </SimpleForm>
    </Create>
  );
};

export default { create };
