import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  Edit,
  List,
  Datagrid,
  TextField,
  DeleteButton,
  EditButton,
  ShowButton,
  Show,
  SimpleShowLayout,
} from "react-admin";
import lingkup_fields from "./lingkup_fields";

const { id, nama, kode } = lingkup_fields;

const create = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
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
        <TextField {...nama} />
        <TextField {...kode} />
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
        <TextField {...nama} />
        <TextField {...kode} />
      </SimpleShowLayout>
    </Show>
  );
};

export default { create, edit, list, show };
