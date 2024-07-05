import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
  ReferenceInput,
  BooleanInput,
} from "react-admin";

import { ProfileTitle } from "../profile/ProfileTitle";

export const RateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="minimumHours"
          label="Minimum Hours"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="Per Hour" source="perHour" />
        <NumberInput label="Per Word by Source" source="perWordBySource" />
        <NumberInput label="Per Word by Target" source="perWordByTarget" />
        <ReferenceInput source="profile.id" reference="Profile" label="Profile">
          <SelectInput optionText={ProfileTitle} />
        </ReferenceInput>
        <BooleanInput label="Travel Allowance" source="travelAllowance" />
      </SimpleForm>
    </Edit>
  );
};
