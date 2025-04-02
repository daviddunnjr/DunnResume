function Show() {
    document.getElementById('themes').style.display = "block";
    document.getElementById('edit').style.display = "block";
    document.getElementById('show').style.display = `none`;
    document.getElementById('hide').style.display = `inline-block`;
}

function Hide() {
    document.getElementById('themes').style.display = 'none';
    document.getElementById('edit').style.display = 'none';
    document.getElementById('show').style.display = `inline-block`;
    document.getElementById('hide').style.display = `none`;
}