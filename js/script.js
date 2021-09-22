storedCount = localStorage.getItem('count');
displayCount = document.getElementById('count');

if (typeof(Storage) !== 'undefined' && storedCount) {
	displayCount.innerHTML = storedCount;
}
else {
	storedCount = 0;
}

function changeCount(by) {
	if (by == '-') {
		--storedCount;
	}
	else if (by == '0') {
		storedCount = 0;
	}
	else {
		++storedCount;
	}
	localStorage.setItem('count', storedCount);
	displayCount.innerHTML = storedCount;
}