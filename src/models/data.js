const db = require("../db");
const dataModel = db.collection("datas");

const getData = async (dataId) => {
  const data = await dataModel.doc(dataId).get();
  return data.data();
};

const createData = async (data) => {
  console.log(data);
  await dataModel.doc(data.id.toString()).set({ ...data });
};
module.exports = { getData, createData };
