import { Certification as TCertification } from "../api/certification/Certification";

export const CERTIFICATION_TITLE_FIELD = "name";

export const CertificationTitle = (record: TCertification): string => {
  return record.name?.toString() || String(record.id);
};
