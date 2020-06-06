import React from "react";
import { ReferenceInput, SelectInput, FormDataConsumer } from "react-admin";
import { useForm } from "react-final-form";
import personel_fields from "../personel_fields";

const { jenis_personel, jenjang_kepangkatan, pangkat } = personel_fields;

const JenjangKepangkatanInput = (props) => {
  const form = useForm();

  const onChange = (e) => {
    form.change(pangkat.source, null);
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
