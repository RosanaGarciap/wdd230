function last_modified_date() {
    if (Date.parse(document.lastModified) != 0)
        document.getElementById("date").innerHTML = document.lastModified;    
}