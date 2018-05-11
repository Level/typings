import LevelDOWN from 'leveldown';

describe("LevelDOWN", () => {
  it("creation", () => {
    let a = new LevelDOWN("./tmp");
    let b = LevelDOWN("./tmp");
  });

  it("methods", (done) => {
    let down = new LevelDOWN("./tmp");

    down.open(()=>{
      down.put("key", "value", (err?) => { });
      down.put(Buffer.from([1]), "value", { something: true }, (err?) => { });
  
      down.get("key", (err?) => { });
      down.get(Buffer.from([1]), { something: true }, (err: Error | undefined, value: any) => { });

      down.close(()=>{
        done();
      });
    });   
  });
});