import { CertificationWhereInput } from "./CertificationWhereInput";
import { CertificationOrderByInput } from "./CertificationOrderByInput";

export type CertificationFindManyArgs = {
  where?: CertificationWhereInput;
  orderBy?: Array<CertificationOrderByInput>;
  skip?: number;
  take?: number;
};
