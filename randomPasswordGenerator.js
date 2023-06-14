function randomPasswordGenerator(givenLength) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+~`{}[]:;'|<>/?-";
  let password = "";
  for (let i = 0; i < givenLength; i++) {
    const randomChars = Math.floor(Math.random() * chars.length);
    password += chars[randomChars];
  }
  return password;
}

console.log(randomPasswordGenerator(8));
