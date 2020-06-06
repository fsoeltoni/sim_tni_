import React, { useEffect, useState } from "react";
import { FormDataConsumer, ReferenceInput, SelectInput } from "react-admin";
import { useFormState } from "react-final-form";
import personel_fields from "../personel_fields";
import data from "../../../providers/data";
import jenjang_kepangkatan_fields from "../../jenjang_kepangkatan/jenjang_kepangkatan_fields";

const { jenjang_kepangkatan, korps } = personel_fields;

const KorpsInput = (props) => {
  const [show, setShow] = useState(false);
  const formState = useFormState();
  const jenjang_kepangkatan_id = formState.values.jenjang_kepangkatan_id;

  useEffect(() => {
    if (jenjang_kepangkatan_id) {
      data
        .getOne("jenjang_kepangkatan", { id: jenjang_kepangkatan_id })
        .then(({ data: res }) => {
          console.log(res);
          if (res && res[jenjang_kepangkatan_fields.cantumkan_korps.source]) {
            setShow(true);
          } else {
            setShow(false);
          }
        });
    }
  }, [jenjang_kepangkatan_id]);

  return (
    <FormDataConsumer subscription={{ values: true }} {...props}>
      {({ formData, ...rest }) =>
        formData[jenjang_kepangkatan.source] &&
        show && (
          <ReferenceInput {...korps} {...rest}>
            <SelectInput optionText="kode" />
          </ReferenceInput>
        )
      }
    </FormDataConsumer>
  );
};

export default KorpsInput;
