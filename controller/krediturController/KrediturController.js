import { executeQuery } from "../../config/db";

const getAllKreditur = async (req, res) => {
  try {
    let krediturData = await executeQuery("select * from kreditur", []);
    res.send(krediturData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getKrediturById = async (req, res) => {
  let id = req.query.id;
  try {
    let krediturData = await executeQuery(
      `select * from kreditur where Id_kreditur=${id}`,
      []
    );
    res.status(200).json(krediturData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteKrediturById = async (req, res) => {
  let id = req.query.id;
  try {
    let krediturData = await executeQuery(
      "delete from kreditur where Id_kreditur=?",
      [id]
    );
    res.status(200).json(krediturData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const saveKreditur = async (req, res) => {
  console.log(req.body);
  let kreditur_nik = req.body.nik;
  let kreditur_name = req.body.nama;
  try {
    let krediturData = await executeQuery(
      "insert into kreditur(nik,nama) values(?,?)",
      [kreditur_nik, kreditur_name]
    );
    krediturData = await executeQuery(
      `select * from kreditur where Id_kreditur=${krediturData.insertId}`
    );
    res.status(201).json(krediturData);
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateKreditur = async (req, res) => {
  let id = req.query.id;
  const { nik, nama } = req.body;
  try {
    let krediturData = await executeQuery(
      `select * from kreditur where Id_kreditur=?`,
      [id]
    );
    console.log(krediturData.length);
    if (krediturData.length > 0) {
      krediturData = await executeQuery(
        "update kreditur set nik=?, nama=? where Id_kreditur=?",
        [nik, nama, id]
      );
      res.status(200).json(krediturData);
    } else {
      res.status(400).json(`Kreditur id=${id} tidak ditemukan`);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

export {
  getAllKreditur,
  getKrediturById,
  deleteKrediturById,
  saveKreditur,
  updateKreditur,
};
