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
import jenis_personel_fields from "./jenis_personel_fields";

const { id, nama, label_no_identitas } = jenis_personel_fields;

const create = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput {...nama} />
        <TextInput {...label_no_identitas} />
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
        <TextInput {...label_no_identitas} />
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
        <TextField {...label_no_identitas} />
      </SimpleShowLayout>
    </Show>
  );
};

export default { create, edit, list, show };
