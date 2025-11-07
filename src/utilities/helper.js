export const url = (name, wrap) => {
    const test = `url('${name}')`;
    return wrap ? test : `${name}`;
  }