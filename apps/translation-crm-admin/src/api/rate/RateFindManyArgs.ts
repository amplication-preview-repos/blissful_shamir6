import { RateWhereInput } from "./RateWhereInput";
import { RateOrderByInput } from "./RateOrderByInput";

export type RateFindManyArgs = {
  where?: RateWhereInput;
  orderBy?: Array<RateOrderByInput>;
  skip?: number;
  take?: number;
};
