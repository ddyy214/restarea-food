export default function validation(values) {
    let error = {};
    const userEmail_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (values.email === "") {
      error.userEmail = "Name should not be empty";
    } else if (!userEmail_pattern.test(values.email)) {
      error.userEmail = "메일이 일치하지 않습니다.";
    } else {
      error.userEmail = "";
    }
  
    if (values.password === "") {
      error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
      error.password = "비밀번호가 일치하지 않습니다.";
    } else {
      error.password = "";
    }
  
    return error;
  }
  