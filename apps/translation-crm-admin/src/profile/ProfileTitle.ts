import { Profile as TProfile } from "../api/profile/Profile";

export const PROFILE_TITLE_FIELD = "firstname";

export const ProfileTitle = (record: TProfile): string => {
  return record.firstname?.toString() || String(record.id);
};
