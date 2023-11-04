// Khi nhập tài khoản, mật khẩu, kiểm tra mật khẩu xử lý:

// Kiểm tra xem tài khoản (username) có tồn tại trước đó trong localstorage hay không (đặt key storage phù hợp) nếu chưa có thì tạo username với pass mới lưu trong storage, còn nếu có hiện thông báo "Tài khoản đã tồn tại"
// Xác kỹ mật khẩu với mật khẩu nhập lại có giống nhau không, nếu không thì hiện lỗi "Mật khẩu và mật khẩu nhập lại không trùng khớp"
// Form Đăng Nhập



const submit = () => {
    //lấy username, password vừa nhập
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    //lấy danh sách accounts dưới localStorage
    const accounts = JSON.parse(localStorage.getItem('accounts')) || []
    

    //tài khoản mới
    const newAccount = {
        username,
        password
    } 

    //Kiểm tra tài khoản tồn tại chưa
    let check = false

    for(const i = 0; i< accounts.length; i++){
        if(array[i].name === newAccount.name){
            check = true
        } 
    }

    if(check){
        console.log('Tai khoan da ton tai')
    }else{
        localStorage.setItem('accounts', JSON.stringify(accounts))
    }
}