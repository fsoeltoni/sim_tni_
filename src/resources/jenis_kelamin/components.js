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
import jenis_kelamin_fields from "./jenis_kelamin_fields";

const { id, nama } = jenis_kelamin_fields;

const create = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput {...nama} />
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
      </SimpleShowLayout>
    </Show>
  );
};

export default { create, edit, list, show };
