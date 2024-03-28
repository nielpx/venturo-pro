document.getElementById('tampilkan').addEventListener('click', function() {
    var value = document.getElementById('dropdown').value;
    if(value === '1') {
        window.location.href = 'table.html';
    } else if(value === '2') {
        window.location.href = 'table2.html';
    }
});
