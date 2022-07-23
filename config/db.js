const { createPool } = require("mysql");
const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "next_spk",
});

pool.getConnection((err) => {
  if (err) {
    console.log("Koneksi gagal");
  } else {
    console.log("Koneksi berhasil");
  }
});

const executeQuery = (query, arrParams) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, arrParams, (err, data) => {
        if (err) {
          console.log("error execute query");
          reject(err);
        }
        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { executeQuery };
