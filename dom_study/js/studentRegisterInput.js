function studentRegisterInput({ type, name, onkeyup }) {
  return `
    <input type='${type}' name='${name}' autocomplete="off" onkeyup= '${onkeyup}(event)' >
    `;
}
