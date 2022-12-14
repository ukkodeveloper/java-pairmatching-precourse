const fs = require('fs');

const FileReader = {
  readBackendCrew(callback) {
    fs.readFile(`./resources/backend-crew.md`, 'utf8', (err, data) => {
      if (err) throw new Error(`[개발자] ${course} 크루 정보 파일이 없습니다.`);
      callback(data);
    });
  },

  readFrontendCrew(callback) {
    fs.readFile(`./resources/frontend-crew.md`, 'utf8', (err, data) => {
      if (err) throw new Error(`[개발자] ${course} 크루 정보 파일이 없습니다.`);
      callback(data);
    });
  },
};

module.exports = FileReader;
