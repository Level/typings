import RocksDB from 'rocksdb';

describe("RocksDB", () => {
  it("creation", () => {
    let a = new RocksDB("./tmp/rocksdb");
    let b = RocksDB("./tmp/rocksdb");
  });

  it("methods", (done) => {
    let down = new RocksDB("./tmp/rocksdb");

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