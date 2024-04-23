export function validation(fieldType, type, regex = /[a-b]/) {
  if (!fieldType || fieldType.length < 0) {
    return `${type} is Required`;
  }
  regex;
  return null;
}
