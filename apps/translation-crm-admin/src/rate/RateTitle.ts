import { Rate as TRate } from "../api/rate/Rate";

export const RATE_TITLE_FIELD = "id";

export const RateTitle = (record: TRate): string => {
  return record.id?.toString() || String(record.id);
};
