function Tambah(){
    var angka1 = document.getElementById('angka1').value;
    var angka2 = document.getElementById('angka2').value;

    var hasil = parseInt(angka1) + parseInt(angka2);

    document.getElementById('hasil').innerHTML = hasil;
}
function kurang(){
    var angka1 = document.getElementById('angka1').value;
    var angka2 = document.getElementById('angka2').value;

    var hasil = parseInt(angka1) - parseInt(angka2);

    document.getElementById('hasil').innerHTML = hasil;
}
function bagi(){
    var angka1 = document.getElementById('angka1').value;
    var angka2 = document.getElementById('angka2').value;

    var hasil = parseInt(angka1) / parseInt(angka2);

    document.getElementById('hasil').innerHTML = hasil;
}
function kali(){
    var angka1 = document.getElementById('angka1').value;
    var angka2 = document.getElementById('angka2').value;

    var hasil = parseInt(angka1) * parseInt(angka2);

    document.getElementById('hasil').innerHTML = hasil;
}