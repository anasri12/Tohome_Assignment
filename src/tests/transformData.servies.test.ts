import axios from "axios";
import { transformData } from "../services/transformData.service";
import { testUsers } from "./transformData.testdata";
import { test_A, test_B, test_C } from "./transformData.testcase";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("transformData", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({ data: { users: testUsers } });
  });
  it(test_A, async () => {
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
    expect(result).toHaveProperty("Support");
    expect(result.Support.male).toBe(1);
    expect(result.Support.female).toBe(0);
    expect(result.Support.hair.Green).toBe(1);
    expect(result.Support.ageRange).toBe("35-35");
    expect(result.Support.addressUser).toHaveProperty(
      "MichaelWilliams",
      "38807"
    );
  });

  it(test_B, async () => {
    const result = await transformData("Engineering");

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

  it(test_C, async () => {
    const result = await transformData("Gaming");

    expect(result).toEqual({});
  });
});
