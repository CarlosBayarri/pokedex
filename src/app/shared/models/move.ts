import { Species } from "./species";
import { VersionGroupDetail } from "./versionGroupDetail";

export interface Move {
    move:                Species;
    versionGroupDetails: VersionGroupDetail[];
  }