import { AbstractLevelDOWN } from 'abstract-leveldown';
import EncodingDown from 'encoding-down';

//import AbstractLevelDOWNDefault from 'abstract-leveldown';

describe("EncodingDown", () => {
  it("creation", () => {
    let a = new EncodingDown(new AbstractLevelDOWN("here"));

    //let c = new AbstractLevelDOWNDefault("everywhere");
  });

  it("methods", () => {
    let encoding = new EncodingDown(new AbstractLevelDOWN("here"));

    encoding.put("key", "value", (err?) => { });
    encoding.put(Buffer.from([1]), "value", { something: true }, (err?) => { });

    encoding.get("key", (err?) => { });
    encoding.get(Buffer.from([1]), { something: true }, (err: Error | undefined, value: any) => { });
  });
});