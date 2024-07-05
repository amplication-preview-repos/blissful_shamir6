import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { PROFILE_TITLE_FIELD } from "../profile/ProfileTitle";

export const RateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Minimum Hours" source="minimumHours" />
        <TextField label="Per Hour" source="perHour" />
        <TextField label="Per Word by Source" source="perWordBySource" />
        <TextField label="Per Word by Target" source="perWordByTarget" />
        <ReferenceField label="Profile" source="profile.id" reference="Profile">
          <TextField source={PROFILE_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Travel Allowance" source="travelAllowance" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
