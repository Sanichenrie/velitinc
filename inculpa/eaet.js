// Hypothetical argument value handler
const argval = {
  collections: {},
  set(name, index, value) {
    if (!this.collections[name]) {
      this.collections[name] = [];
    }
    this.collections[name][index] = value;
  }
};

// Setting values using argval.set
const collectionName = "exampleCollection";
const position = 2;
const dataValue = "New Value";

argval.set(collectionName, position, dataValue);
