import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LanguageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ISO Code" source="isoCode" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
