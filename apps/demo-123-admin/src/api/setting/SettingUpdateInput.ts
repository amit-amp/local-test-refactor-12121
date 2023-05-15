import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SettingUpdateInput = {
  user?: UserWhereUniqueInput | null;
  description?: string | null;
};
