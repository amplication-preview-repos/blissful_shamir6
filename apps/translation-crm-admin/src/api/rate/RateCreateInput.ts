import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type RateCreateInput = {
  minimumHours?: "Option1" | null;
  perHour?: number | null;
  perWordBySource?: number | null;
  perWordByTarget?: number | null;
  profile?: ProfileWhereUniqueInput | null;
  travelAllowance?: boolean | null;
};