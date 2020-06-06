import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
  Edit,
  List,
  Datagrid,
  TextField,
  ReferenceField,
  BooleanField,
  DeleteButton,
  EditButton,
  ShowButton,
  Show,
  SimpleShowLayout,
} from "react-admin";
import jenjang_kepangkatan_fields from "./jenjang_kepangkatan_fields";

const {
  id,
  jenis_personel,
  nama,
  kode,
  cantumkan_korps,
} = jenjang_kepangkatan_fields;

const create = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput {...jenis_personel}>
          <SelectInput optionText="nama" />
        </ReferenceInput>
        <TextInput {...nama} />
        <TextInput {...kode} />
        <BooleanInput {...cantumkan_korps} />
      </SimpleForm>
    </Create>
  );
};

const edit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput {...id} disabled />
        <ReferenceInput {...jenis_personel}>
          <SelectInput optionText="nama" />
        </ReferenceInput>
        <TextInput {...nama} />
        <TextInput {...kode} />
        <BooleanInput {...cantumkan_korps} />
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
        <TextField {...nama} />
        <TextField {...kode} />
        <BooleanField {...cantumkan_korps} />
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
        <TextField {...nama} />
        <TextField {...kode} />
        <BooleanField {...cantumkan_korps} />
      </SimpleShowLayout>
    </Show>
  );
};

export default { create, edit, list, show };
