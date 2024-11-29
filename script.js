document.getElementById('expense-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const expense = document.getElementById('expense').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const friends = parseInt(document.getElementById('friends').value);

    if (isNaN(amount) || isNaN(friends) || friends <= 0) {
        alert('Please enter valid numbers for amount and number of friends.');
        return;
    }

    if (friends > 1000) {
        alert('The number of friends is too large to split the expense meaningfully.');
        return;
    }

    const share = (amount / friends).toFixed(2);

    document.getElementById('result').innerHTML = `
        <p>Expense: ${expense}</p>
        <p>Total Amount: $${amount.toFixed(2)}</p>
        <p>Number of Friends: ${friends}</p>
        <p>Each Friend Pays: $${share}</p>
    `;

    document.getElementById('result').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#000000', '#FF5733', '#FF8C00', '#FFD700', '#ADFF2F', '#00FF7F', '#00CED1', '#1E90FF', '#9370DB', '#FF1493', '#000000'];
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 5000);
});