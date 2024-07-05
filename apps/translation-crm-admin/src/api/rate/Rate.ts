import { Profile } from "../profile/Profile";

export type Rate = {
  createdAt: Date;
  id: string;
  minimumHours?: "Option1" | null;
  perHour: number | null;
  perWordBySource: number | null;
  perWordByTarget: number | null;
  profile?: Profile | null;
  travelAllowance: boolean | null;
  updatedAt: Date;
};
