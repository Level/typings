import { AbstractLevelDOWN } from 'abstract-leveldown';
//import AbstractLevelDOWNDefault from 'abstract-leveldown';

describe("AbstractLevelDOWN", () => {
  it("creation", () => {
    let a = new AbstractLevelDOWN("here");
    let b = AbstractLevelDOWN("there");
    //let c = new AbstractLevelDOWNDefault("everywhere");
  });

  it("methods", () => {
    let down = new AbstractLevelDOWN("here");

    down.put("key", "value", (err?) => { });
    down.put(Buffer.from([1]), "value", { something: true }, (err?) => { });

    down.get("key", (err?) => { });
    down.get(Buffer.from([1]), { something: true }, (err: Error | undefined, value: any) => { });
  });
});