import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns null when authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null when authorization header does not start with ApiKey", () => {
    expect(getAPIKey({ authorization: "Bearer token123" })).toBeNull();
  });

  test("returns null when ApiKey prefix is missing", () => {
    expect(getAPIKey({ authorization: "token123" })).toBeNull();
  });

  test("returns the api key when format is correct", () => {
    expect(getAPIKey({ authorization: "ApiKey my-secret-key" })).toBe(
      "my-secret-key",
    );
  });
});
