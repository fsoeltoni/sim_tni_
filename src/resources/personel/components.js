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
import KorpsInput from "./helpers/KorpsInput";
import JenjangKepangkatanPangkatKorpsInput from "./helpers/JenjangKepangkatanPangkatKorpsInput";

const {
  nama,
  jenis_kelamin,
  golongan_darah,
  jenjang_kepangkatan,
  pangkat,
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
        {/* <JenjangKepangkatanInput />
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
        <KorpsInput /> */}
        <JenjangKepangkatanPangkatKorpsInput />
        <FormDataConsumer subscription={{ values: true }}>
          {({ formData, ...rest }) =>
            formData[jenjang_kepangkatan.source] && (
              <TextInput {...jabatan} {...rest} />
            )
          }
        </FormDataConsumer>
        <FormDataConsumer subscription={{ values: true }}>
          {({ formData, ...rest }) =>
            formData[jenjang_kepangkatan.source] && (
              <TextInput {...no_kt_prajurit} {...rest} />
            )
          }
        </FormDataConsumer>
      </SimpleForm>
    </Create>
  );
};

export default { create };
