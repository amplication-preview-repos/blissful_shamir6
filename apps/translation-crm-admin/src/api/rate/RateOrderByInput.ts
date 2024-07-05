import { SortOrder } from "../../util/SortOrder";

export type RateOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  minimumHours?: SortOrder;
  perHour?: SortOrder;
  perWordBySource?: SortOrder;
  perWordByTarget?: SortOrder;
  profileId?: SortOrder;
  travelAllowance?: SortOrder;
  updatedAt?: SortOrder;
};
