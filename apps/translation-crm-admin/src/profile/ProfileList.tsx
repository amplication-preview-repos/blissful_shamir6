import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Profiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Capacity" source="capacity" />
        <TextField label="Certification" source="certification" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="Experience in Field" source="experienceInField" />
        <TextField label="Firstname" source="firstname" />
        <TextField
          label="Have Worked With (Client)"
          source="haveWorkedWithClient"
        />
        <BooleanField label="Have Worked With MLS" source="haveWorkedWithMls" />
        <TextField label="ID" source="id" />
        <TextField
          label="Interpretation Method"
          source="interpretationMethod"
        />
        <TextField label="Interpretation Type" source="interpretationType" />
        <TextField label="Lastname" source="lastname" />
        <BooleanField label="Mileage" source="mileage" />
        <TextField label="Minimum Hours" source="minimumHours" />
        <TextField label="Native Languages" source="nativeLanguages" />
        <TextField label="Notes" source="notes" />
        <TextField label="Payment Methods" source="paymentMethods" />
        <TextField label="Phone" source="phone" />
        <TextField label="Preference" source="preference" />
        <TextField label="Rate Other Comments" source="rateOtherComments" />
        <TextField label="Rate Per Hour" source="ratePerHour" />
        <TextField
          label="Rate Per Word by Source"
          source="ratePerWordBySource"
        />
        <TextField
          label="Rate Per Word by Target"
          source="ratePerWordByTarget"
        />
        <TextField label="Source Languages" source="sourceLanguages" />
        <TextField label="State" source="state" />
        <TextField label="Target Languages" source="targetLanguages" />
        <TextField label="TM Fields" source="tmFields" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Zip Code" source="zipCode" />
      </Datagrid>
    </List>
  );
};
