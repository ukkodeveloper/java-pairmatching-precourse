const fs = require('fs');

const FileReader = {
  read(course, callback) {
    fs.readFile(`./resources/${course}-crew.md`, 'utf8', (err, data) => {
      if (err) {
        throw new Error(`[개발자] ${course} 크루 정보 파일이 없습니다.`);
      }
      callback(data);
    });
  },
};

module.exports = FileReader;
