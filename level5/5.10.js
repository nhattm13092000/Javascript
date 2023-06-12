/**
SumAll: Viết function để tính tổng giá trị của các key của các phần tử con trong mảng bất kỳ:
 * @param {array} arr
 * @returns tính tổng giá trị của các key của các phần tử con trong mảng bất kỳ
 */

const fs = require('fs');

function replaceParams(template, params) {
  let result = template;
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const regex = new RegExp(`{{${key}}}`, 'g');
      result = result.replace(regex, params[key]);
    }
  }

  return result;
}

function generateFile(templateFile, params, outputFile) {
  fs.readFile(templateFile, 'utf8', (err, templateContent) => {
    if (err) {
      console.error('Đã xảy ra lỗi khi đọc file template:', err);
      return;
    }
    const newContent = replaceParams(templateContent, params);

    fs.writeFile(outputFile, newContent, 'utf8', (err) => {
      if (err) {
        console.error('Đã xảy ra lỗi khi ghi file:', err);
        return;
      }

      console.log('File mới đã được tạo thành công:', outputFile);
    });
  });
}

generateFile('input.txt', {name: 'Jonny'}, 'output.txt')