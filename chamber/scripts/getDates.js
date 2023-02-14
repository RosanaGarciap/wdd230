function last_modified_date() {
    if (Date.parse(document.lastModified) != 0)
        document.getElementById("date").innerHTML = document.lastModified;    
    document.getElementById("year").innerHTML =new Date().getFullYear()
}
last_modified_date();





