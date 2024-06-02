function insertFooter() {
    fetch('../Footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML += data;
        })
        .catch(error => console.error('Error fetching footer:', error));
}
insertFooter();
