## 02 Version Control and Branch Management-(git)

- git pertamakali muncul pada tahun 2005. git merupakan version control system populer yang digunakan para developer untuk seluruh file atau repository suatu project, git juga digunakan oleh para developer untuk mengembangkan software secara bersama-sama (kolaborasi).
-  github merupakan layanan yang digunakan untuk menyimpan dan mengelola sebuah project yang dinamakan repository (git repo) baik secara individu ataupun secara bersama-sama(kolaborasi)

### cara melakukan konfigurasi pada git
- git config --global user.name "john doe"
- git config --globar user.email "johndoe@gmail.com"

### cara melakukan init pada repo yg telah kita buat
1. cara dengan melakukan init terlebihdahulu
- git init
- git remote add origin link_repository_kita | contoh git remote add origin https://github.com/johndoe/reponew
2. cara langsung clone dari repo
- git clone link_repository_kita |contoh git clone https://github.com/johndoe/reponew
- cd my_project(folder project kita) | contoh cd frontendProject

### cara melakukan push ke repo
- git status 

kita dapat melihat apa saja yang telah berubah dengan mengetikkan git status

- git add .

untuk memasukkan semua perubahan kedalam staging area

atau 

- git add nama_file(yang ingin di commit) | contoh git add login.jsx

untuk memasukkan yang dipilih secara spesifik ke dalam stagging area

- git commit -m "perubahan yang dilakukan" | contoh git commit -m "menambahkan fitur login"

- git push origin nama_branch | conntoh git push origin master

### file git ignore
file gitignore merupakan file yg berfungsi untuk memfilter mana saja yang tidak perlu di push kedalam repository kita, file yang ingin kita filter kita masukkan kedalam .gitignore tersebut


### cara menampilkan history commit kita
- git log --oneline

hal tersebut akan memunculkan history commit yang telah kita lakukan beserta nomor dari commit tersebut

### cara berpindah ke commit yang sebelumnya kita buat
- git checkout nomor_commit | git checkout 23HFJ38

### cara untuk kembali ke commit terbaru 
- git checkout nama_branch | git checkout master

### cara jika sudah memasukkan sesuatu kedalam stagging area tetapi ingin membatakannya sebelum di commit
- git reset --soft

git reset --soft juga digunakan jika sudah melakukan commit tapi ingin membatalkan commit tersebut, tetapi commit tersebut masih ada

sedangkan jika sudah melakukan commit, lalu ingin membatalkan commit tersebut sekaligus menghapus commit tersebut, bisa menggunakan
- git reset --hard

bisa juga menggunakan git reset pada commit yang ingin dipilih

- contoh | git reset sk394kf --soft
- contoh | git reset sk374kf --hard

### branch
branch merupakan percabangan dari reposotory
- git branch list 

untuk mengetahui branch apa saja yang ada di repo kita

- git branch nama_branch

untuk membuat branch baru

- git branch -D nama_branch 

untuk menghapus branch 

- git branch -a 

untuk remote branch

### pull request
pull request bisa dikatakan memberikan permohonan kepada pemilik repo untuk menyetujui perubahan yang kita ajukan, perubahan disetujui atau ditolak itu tergantung dari pemilik repo

untuk melakukan pull request, kita tidak boleh membuat perubahan pada branch master langsung, perubahan yang kita lakukan lebih baiknya dibuatkan branch tersendiri atau diletakkan pada branch khusus yang telah dibuat (jika ada)

nah di branch itulah kita buatkan perubahan, kita add, commit, lalu push ke branch itu

jika sudah di push maka, di repo pemilik branch akan muncul informasi pull request kita. pemilik repo akan mengecek perubahan apa yang kita lakukan lalu menyetujui ataupun menolak hal tersebut

### merge
merge merupakan penggabungan antara kode yang sudah ada di repo dengan pull request yang masuk kedalam repo.

saat ingin melakukan merge kita harus memperhatikan apakah ada konflik atau tidak, karena hal tersebut akan sangat mempengaruhi kode kita nantinya.

### conflict
conflik biasanya terjadi saat akan melakukan merge dari pull request.

kita harus teliti dalam menyelesaikan konflik yang terjadi mana yang perlu diambil dan mana yang perlu di buang dari kode yang didalamnya terjadi konflik.



