import axios from "axios";
import { transformData } from "../services/transformData.service";
import { testDescription, testUsers } from "./testData";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("transformData", () => {
  it(testDescription, async () => {
    mockedAxios.get.mockResolvedValue({ data: { users: testUsers } });

    const result = await transformData();

    expect(result).toHaveProperty("Engineering");
    expect(result.Engineering.male).toBe(1);
    expect(result.Engineering.female).toBe(1);
    expect(result.Engineering.hair.Brown).toBe(1);
    expect(result.Engineering.hair.White).toBe(1);
    expect(result.Engineering.ageRange).toBe("28-38");
    expect(result.Engineering.addressUser).toHaveProperty(
      "EmilyJohnson",
      "29112"
    );
    expect(result.Engineering.addressUser).toHaveProperty(
      "AlexanderJones",
      "86684"
    );
  });
});
