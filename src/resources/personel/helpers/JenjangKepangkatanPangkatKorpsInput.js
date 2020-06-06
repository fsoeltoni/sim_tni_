import React from "react";
import { FormDataConsumer, ReferenceInput, SelectInput } from "react-admin";
import JenjangKepangkatanInput from "./JenjangKepangkatanInput";
import KorpsInput from "./KorpsInput";
import personel_fields from "../personel_fields";

const { jenjang_kepangkatan, pangkat } = personel_fields;

const JenjangKepangkatanPangkatKorpsInput = (props) => {
  return (
    <span>
      <JenjangKepangkatanInput {...props} />
      &nbsp;
      <FormDataConsumer subscription={{ values: true }} {...props}>
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
      &nbsp;
      <KorpsInput {...props} />
    </span>
  );
};

export default JenjangKepangkatanPangkatKorpsInput;
