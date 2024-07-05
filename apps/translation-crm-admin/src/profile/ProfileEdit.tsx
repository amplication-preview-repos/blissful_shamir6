import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectArrayInput,
  SelectInput,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceArrayInput,
} from "react-admin";

import { RateTitle } from "../rate/RateTitle";

export const ProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="Capacity"
          source="capacity"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <SelectArrayInput
          label="Certification"
          source="certification"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="country"
          label="Country"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Email" source="email" type="email" />
        <SelectArrayInput
          label="Experience in Field"
          source="experienceInField"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Firstname" source="firstname" />
        <TextInput
          label="Have Worked With (Client)"
          multiline
          source="haveWorkedWithClient"
        />
        <BooleanInput label="Have Worked With MLS" source="haveWorkedWithMls" />
        <SelectInput
          source="interpretationMethod"
          label="Interpretation Method"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="interpretationType"
          label="Interpretation Type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Lastname" source="lastname" />
        <BooleanInput label="Mileage" source="mileage" />
        <SelectInput
          source="minimumHours"
          label="Minimum Hours"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Native Languages" source="nativeLanguages" />
        <TextInput label="Notes" multiline source="notes" />
        <SelectArrayInput
          label="Payment Methods"
          source="paymentMethods"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Phone" source="phone" />
        <SelectInput
          source="preference"
          label="Preference"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput
          label="Rate Other Comments"
          multiline
          source="rateOtherComments"
        />
        <NumberInput label="Rate Per Hour" source="ratePerHour" />
        <NumberInput
          label="Rate Per Word by Source"
          source="ratePerWordBySource"
        />
        <NumberInput
          label="Rate Per Word by Target"
          source="ratePerWordByTarget"
        />
        <ReferenceArrayInput
          source="rates"
          reference="Rate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RateTitle} />
        </ReferenceArrayInput>
        <TextInput label="Source Languages" source="sourceLanguages" />
        <SelectInput
          source="state"
          label="State"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Target Languages" source="targetLanguages" />
        <TextInput label="TM Fields" source="tmFields" />
        <TextInput label="Zip Code" source="zipCode" />
      </SimpleForm>
    </Edit>
  );
};
