import axios from "axios";
import { TransformedDataType, User } from "../utils/types";

export async function transformData(
  departmentFilter?: string
): Promise<TransformedDataType> {
  const { data } = await axios.get("https://dummyjson.com/users");
  const users: User[] = data.users;

  const groupUsers: TransformedDataType = {};

  for (const user of users) {
    const department = user.company.department;

    if (departmentFilter && department !== departmentFilter) continue;

    if (!groupUsers[department]) {
      groupUsers[department] = {
        male: 0,
        female: 0,
        ageRange: "",
        hair: {},
        addressUser: {},
      };
    }

    const groupUser = groupUsers[department];
    user.gender === "male" ? groupUser.male++ : groupUser.female++;

    const hairColor = user.hair.color;
    groupUser.hair[hairColor] = (groupUser.hair[hairColor] || 0) + 1;

    const addressUserName = `${user.firstName}${user.lastName}`;
    groupUser.addressUser[addressUserName] = user.address.postalCode;
  }

  for (const department in groupUsers) {
    const departmentUsers = users.filter(
      (user) => user.company.department === department
    );
    const ages = departmentUsers.map((user) => user.age);
    const minAge = Math.min(...ages);
    const maxAge = Math.max(...ages);
    groupUsers[department].ageRange = `${minAge}-${maxAge}`;
  }

  return groupUsers;
}
