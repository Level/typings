declare module "rocksdb" {

  import {
    AbstractLevelDOWN,
    AbstractIteratorOptions,
    AbstractIterator,
    AbstractOpenOptions,
    AbstractPutOptions,
    AbstractGetOptions,
    AbstractDelOptions,
    AbstractBatchOptions,
    ErrorCallback,
    ErrorValueCallback,
    AbstractChainedBatch,
    AbstractBatch
  } from 'abstract-leveldown';

  export type Bytes = string | Buffer;
  export type ErrorSizeCallback = (err: Error | undefined, size: number) => void;

  export interface RocksDB extends AbstractLevelDOWN<Bytes, Bytes> {
    open(cb: ErrorCallback): void;
    open(options: RocksDBOpenOptions, cb: ErrorCallback): void;

    get(key: Bytes, cb: ErrorValueCallback<Bytes>): void;
    get(key: Bytes, options: RocksDBGetOptions, cb: ErrorValueCallback<Bytes>): void;

    put(key: Bytes, value: Bytes, cb: ErrorCallback): void;
    put(key: Bytes, value: Bytes, options: RocksDBPutOptions, cb: ErrorCallback): void;

    del(key: Bytes, cb: ErrorCallback): void;
    del(key: Bytes, options: RocksDBDelOptions, cb: ErrorCallback): void;

    batch(): AbstractChainedBatch<Bytes, Bytes>;
    batch(array: AbstractBatch[], cb: ErrorCallback): AbstractChainedBatch<Bytes, Bytes>;
    batch(array: AbstractBatch[], options: RocksDBBatchOptions, cb: ErrorCallback): AbstractChainedBatch<Bytes, Bytes>;

    approximateSize(start: Bytes, end: Bytes, cb: ErrorSizeCallback): void;
    compactRange(start: Bytes, end: Bytes, cb: ErrorCallback): void;
    getProperty(property: string): string;
    destroy(location: string, cb: ErrorCallback): void;
    repair(location: string, cb: ErrorCallback): void;
    iterator(options?: RocksDBIteratorOptions): RocksDBIterator
  }

  interface RocksDBConstructor {
    new(location: string): RocksDB
    (location: string): RocksDB
  }

  export interface RocksDBOpenOptions extends AbstractOpenOptions {

  }

  export interface RocksDBGetOptions extends AbstractGetOptions {
    fillCache?: boolean;
  }

  export interface RocksDBPutOptions extends AbstractPutOptions {
    sync?: boolean
  }

  export interface RocksDBDelOptions extends AbstractDelOptions {
    sync?: boolean;
  }

  export interface RocksDBBatchOptions extends AbstractBatchOptions {
    sync?: boolean;
  }  

  export interface RocksDBIteratorOptions extends AbstractIteratorOptions<Bytes> {
    fillCache?: boolean;
  }

  export interface RocksDBIterator extends AbstractIterator<Bytes, Bytes> {
    seek(key: Bytes): void;
    binding: any;
    cache: any;
    finished: any;
    fastFuture: any;
  }

  const RocksDB: RocksDBConstructor;
  export default RocksDB;
}