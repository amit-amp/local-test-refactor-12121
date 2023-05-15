import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SettingWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  description?: StringNullableFilter;
};
