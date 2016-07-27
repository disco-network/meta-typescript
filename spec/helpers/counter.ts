interface Fn<Return> {
  (): Return;
}

interface Counter<Return> {
  (): Return;
  getCount(): number;
}

interface CounterReadable extends Function {
  getCount(): number;
}

export function create<Return>(fn: (args: IArguments) => Return): Counter<Return> {
  let ctr = 0;
  let ret = function() {
    ++ctr;
    return fn(arguments);
  } as Counter<Return>;
  ret.getCount = function() {
    return ctr;
  };
  return ret;
}

export function get(fn: Function): number {
  return (fn as CounterReadable).getCount();
}
