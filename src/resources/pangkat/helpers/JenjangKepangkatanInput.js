import React from "react";
import { ReferenceInput, SelectInput, FormDataConsumer } from "react-admin";
import { useForm } from "react-final-form";
import pangkat_fields from "../pangkat_fields";

const { jenis_personel, jenjang_kepangkatan, nama, kode } = pangkat_fields;

const JenjangKepangkatanInput = (props) => {
  const form = useForm();

  const onChange = (e) => {
    form.change(nama.source, null);
    form.change(kode.source, null);
  };

  return (
    <FormDataConsumer subscription={{ values: true }} {...props}>
      {({ formData, ...rest }) =>
        formData[jenis_personel.source] && (
          <ReferenceInput
            {...jenjang_kepangkatan}
            {...rest}
            filter={{ jenis_personel_id: formData[jenis_personel.source] }}
            onChange={onChange}
          >
            <SelectInput optionText="kode" />
          </ReferenceInput>
        )
      }
    </FormDataConsumer>
  );
};

export default JenjangKepangkatanInput;
