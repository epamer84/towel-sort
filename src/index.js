module.exports = function towelSort(matrix) {
	let res = [];
	if (matrix) {
		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; matrix[i].length; j++) {
				if (i % 2 == 0) {
					res.push(matrix[i].shift());
				} else {
					res.push(matrix[i].pop())
				}
			}
		}
	}
	return res;
}
