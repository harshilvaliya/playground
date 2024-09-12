const insert = document.getElementById("insert");

const keyData = {
  key: (key) => (key === " " ? "Space" : key),
  keyCode: (keyCode) => keyCode,
  code: (code) => code,
};

function createTableRow(data) {
  return `
        <tr>
            <td>${data.key}</td>
            <td>${data.keyCode}</td>
            <td>${data.code}</td>
        </tr>
    `;
}

function updateDisplay(e) {
  const data = {
    key: keyData.key(e.key),
    keyCode: keyData.keyCode(e.keyCode),
    code: keyData.code(e.code),
  };

  insert.innerHTML = `
        <div class="color">
            <table>
                <tr>
                    <th>Key</th>
                    <th>KeyCode</th>
                    <th>Code</th>
                </tr>
                ${createTableRow(data)}
            </table>
        </div>
    `;
}

window.addEventListener("keydown", updateDisplay);
