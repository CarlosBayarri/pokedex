import { Species } from "./species";
import { VersionDetail } from "./versionDetail";

export interface HeldItem {
    item:           Species;
    versionDetails: VersionDetail[];
  }