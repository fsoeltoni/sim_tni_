import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  Edit,
  List,
  Datagrid,
  TextField,
  ReferenceField,
  DeleteButton,
  EditButton,
  ShowButton,
  Show,
  SimpleShowLayout,
} from "react-admin";
import pangkat_fields from "./pangkat_fields";
import JenisPersonelInput from "./helpers/JenisPersonelInput";
import JenjangKepangkatanInput from "./helpers/JenjangKepangkatanInput";

const { id, jenis_personel, jenjang_kepangkatan, nama, kode } = pangkat_fields;

const create = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <JenisPersonelInput />
        <JenjangKepangkatanInput />
        <TextInput {...nama} />
        <TextInput {...kode} />
      </SimpleForm>
    </Create>
  );
};

const edit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput {...id} disabled />
        <JenisPersonelInput />
        <JenjangKepangkatanInput />
        <TextInput {...nama} />
        <TextInput {...kode} />
      </SimpleForm>
    </Edit>
  );
};

const list = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField {...id} />
        <ReferenceField {...jenis_personel}>
          <TextField source="nama" />
        </ReferenceField>
        <ReferenceField {...jenjang_kepangkatan}>
          <TextField source="kode" />
        </ReferenceField>
        <TextField source="nama" />
        <TextField source="kode" />
        <DeleteButton />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

const show = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField {...id} />
        <ReferenceField {...jenis_personel}>
          <TextField source="nama" />
        </ReferenceField>
        <ReferenceField {...jenjang_kepangkatan}>
          <TextField source="kode" />
        </ReferenceField>
        <TextField source="nama" />
        <TextField source="kode" />
      </SimpleShowLayout>
    </Show>
  );
};

export default { create, edit, list, show };
