
const setPicklist = (includeNum, includeSpec) => {
    const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
    const num = "0123456789".split('')
    const special = "!@#$%^&*_-+=".split('')

    const list = alpha
    includeNum && list.push(...num)
    includeSpec && list.push(...special)
    return list
}

const setPasswordElement = (password) => {
    const passwordElement = document.getElementById('password-container').firstElementChild
    passwordElement.innerHTML = password
}

const generatePassword = () => {    
    const minLength = document.getElementById('min-length').value ? document.getElementById('min-length').value : 8
    const maxLength = document.getElementById('max-length').value ? document.getElementById('max-length').value : 16
    const includeNum = document.getElementById('include-num').checked
    const includeSpec = document.getElementById('include-spec').checked

    const pwLength = Math.floor(minLength) + Math.floor(Math.random() * (maxLength - minLength)) 
    const pickList = setPicklist(includeNum, includeSpec)

    let password = ''
    for (let i = 0; i < pwLength; i ++) {
        let charIndex = Math.floor(Math.random() * pickList.length)
        password = password.concat(pickList[charIndex])
    }
    
    setPasswordElement(password)
}

