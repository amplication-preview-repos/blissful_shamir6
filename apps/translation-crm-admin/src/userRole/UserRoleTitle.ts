import { UserRole as TUserRole } from "../api/userRole/UserRole";

export const USERROLE_TITLE_FIELD = "name";

export const UserRoleTitle = (record: TUserRole): string => {
  return record.name?.toString() || String(record.id);
};
