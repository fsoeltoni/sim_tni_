import React, { useEffect, useState } from "react";
import { NumberInput } from "react-admin";
import { useFormState } from "react-final-form";
import personel_fields from "../personel_fields";
import data from "../../../providers/data";
import jenis_personel_fields from "../../jenis_personel/jenis_personel_fields";

const { no_identitas } = personel_fields;

const NoIdentitasInput = (props) => {
  const [show, setShow] = useState(false);
  const [label, setLabel] = useState(null);
  const formState = useFormState();
  const jenis_personel_id = formState.values.jenis_personel_id;

  useEffect(() => {
    if (jenis_personel_id) {
      setShow(true);

      data
        .getOne("jenis_personel", { id: jenis_personel_id })
        .then(({ data: res }) => {
          if (res) {
            setLabel(res[jenis_personel_fields.label_no_identitas.source]);
          }
        });
    } else {
      setShow(false);
      setShow(null);
    }
  }, [jenis_personel_id]);

  return show ? (
    <NumberInput source={no_identitas.source} label={label} {...props} />
  ) : null;
};

export default NoIdentitasInput;
