import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
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
  FormDataConsumer,
} from "react-admin";
import satlak_fields from "./satlak_fields";

const { id, lingkup, jenis_pomdam, nama, kode, markas } = satlak_fields;

const create = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput {...lingkup}>
          <SelectInput optionText="kode" />
        </ReferenceInput>
        <FormDataConsumer subscription={{ values: true }}>
          {({ formData, ...rest }) =>
            formData[lingkup.source] &&
            formData[lingkup.source] === 2 && (
              <ReferenceInput {...jenis_pomdam} {...rest}>
                <SelectInput optionText="nama" />
              </ReferenceInput>
            )
          }
        </FormDataConsumer>
        <TextInput {...nama} />
        <TextInput {...kode} />
        <TextInput {...markas} />
      </SimpleForm>
    </Create>
  );
};

const edit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput {...id} disabled />
        <ReferenceInput {...lingkup}>
          <SelectInput optionText="kode" />
        </ReferenceInput>
        <ReferenceInput {...jenis_pomdam}>
          <SelectInput optionText="nama" />
        </ReferenceInput>
        <TextInput {...nama} />
        <TextInput {...kode} />
        <TextInput {...markas} />
      </SimpleForm>
    </Edit>
  );
};

const list = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField {...id} />
        <ReferenceField {...lingkup}>
          <TextField source="kode" />
        </ReferenceField>
        <ReferenceField {...jenis_pomdam}>
          <TextField source="nama" />
        </ReferenceField>
        <TextField {...nama} />
        <TextField {...kode} />
        <TextField {...markas} />
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
        <ReferenceField {...lingkup}>
          <TextField source="kode" />
        </ReferenceField>
        <ReferenceField {...jenis_pomdam}>
          <TextField source="nama" />
        </ReferenceField>
        <TextField {...nama} />
        <TextField {...kode} />
        <TextField {...markas} />
      </SimpleShowLayout>
    </Show>
  );
};

export default { create, edit, list, show };
