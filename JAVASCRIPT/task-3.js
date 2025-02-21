
        alert("Selamat datang di tutorial pakai alert");

        function sayHello(){
            alert("Hello!");
        }
 
      
        document.write("<h1>Cara Menggunakan document.write</h1>");
        document.write("<hr>");
        document.write("<p>Saya sedang belajar Javascript</p>");
        document.write("di <b>petanikode.com</b>")


        // membuat objek elemen
        var hasil = document.getElementById("hasil-output");

        // menampilkan output ke elemen hasil
        hasil.innerHTML = "<p>Aku suka Javascript</p>";

    <button onclick="sayHello()">Klik Aku!</button>
