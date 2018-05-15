import levelup from 'levelup';
import memdown from 'memdown';
import { expect } from 'chai';

describe("LevelUP", () => {
  it("creation", () => {
    let down = new memdown();
    let up = new levelup(down);
  });

  it("methods", async () => {
    let down = new memdown();
    let up = new levelup(down);

    await up.open();

    await up.put("hello", "world");

    let result = await up.get("hello");

    expect(result).to.be.eql(Buffer.from("world"));
  });
});