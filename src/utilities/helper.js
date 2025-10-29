export const url = (name, wrap) => {
    const test = `url('${name}')`;
    console.log("test", test);
    return wrap ? test : `${name}`;
  }