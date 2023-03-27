const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  test('should return the trivial partition key when no event is provided', () => {
    const result = deterministicPartitionKey();
    expect(result).toEqual("0");
  });

  test('should return the partition key when it exists in the event object', () => {
    const event = { partitionKey: "my_partition_key" };
    const result = deterministicPartitionKey(event);
    expect(result).toEqual("my_partition_key");
  });

  test('should generate a partition key when it does not exist in the event object', () => {
    const event = { someData: "123" };
    const result = deterministicPartitionKey(event);
    const expected = "374d7542cb9d4d3c8ab974e2ea5b3a18c18bf53f196f8fcd07b0458e80a49ece90637bd9bfdb0dbaab6b80449f6644efc62dd6094663ece742d83f3cd3c44c21";
    expect(result).toEqual(expected);
  });

  test('should handle non-string candidate keys', () => {
    const event = { partitionKey: 123 };
    const result = deterministicPartitionKey(event);
    const expected = "123";
    expect(result).toEqual(expected);
  });

  test('should handle candidate keys longer than the maximum length', () => {
    const longString = "a".repeat(300);
    const event = { someData: longString };
    const result = deterministicPartitionKey(event);
    const expected = "4cdb41a34bd1c43e4f3882e8d623d3f5e5bfe833b781ee6592a231f65bc5b5791016998d13b1b1c3c955a01955fe19881530e0b51ae6a9496fc5aae1492647c1";
    expect(result).toEqual(expected);
  });




});
