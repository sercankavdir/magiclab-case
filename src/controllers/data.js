const dataModel = require("../models/data");

const getData = async (dataId) => {
  const data = await dataModel.getData(dataId);
  if (!data) {
    throw new Error("Data not found!");
  }
  return data;
};

const saveData = async (data) => {
  await dataModel.createData(data);
};

module.exports = { getData, saveData };
