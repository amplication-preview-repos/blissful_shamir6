import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type RateWhereInput = {
  id?: StringFilter;
  minimumHours?: "Option1";
  perHour?: FloatNullableFilter;
  perWordBySource?: FloatNullableFilter;
  perWordByTarget?: FloatNullableFilter;
  profile?: ProfileWhereUniqueInput;
  travelAllowance?: BooleanNullableFilter;
};
