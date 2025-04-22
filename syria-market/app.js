// إنشاء حساب
function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert("تم إنشاء الحساب بنجاح!");
        })
        .catch((error) => {
            alert("حدث خطأ: " + error.message);
        });
}
