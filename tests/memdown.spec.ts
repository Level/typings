import MemDown from 'memdown';

describe("LevelDOWN", () => {
  it("creation", () => {
    let a = new MemDown();
    let b = MemDown();
  });

  it("methods", (done) => {
    let down = new MemDown<string, string>();

    down.open(() => {
      down.put("key", "value", (err?) => { });

      down.get("key", (err) => { });
      down.get("key", (err, value) => { });

      down.close(() => {
        done();
      });
    });
  });
});