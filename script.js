const backgroundColor = "#0f0f0f";
const foregroundColor = "#ffffff";

document.body.style.backgroundColor = backgroundColor;

const div = document.getElementById("container");
const input = document.getElementById("input");

input.addEventListener("input", function (e) {
	let val = e.target.value;

	if (val[0] !== "#") val = "#" + val;
	let len = val.length - 1;

	if (len > 6) {
		console.log("Length limit is exceeded");
	} else {
		switch (len) {
			case 1:
				val += val[1].repeat(5);
				break;
			case 2:
				val += val.substr(1, 2).repeat(2);
				break;
			case 3:
				val += val.substr(1, 3);
				break;
			case 4:
				val += val.substr(1, 2);
				break;
			case 5:
				val += val[1];
				break;
		}
		console.log("val is now: " + val);
	}

	if (/^#[0-9a-f]{6}$/i.test(val)) {
		document.body.style.backgroundColor = val;
		div.style.color = getContrastColor(val);
	} else {
		document.body.style.backgroundColor = backgroundColor;
		div.style.color = foregroundColor;
	}
});

function getContrastColor(color) {
	let rgb = hexToRgb(color);
	let isLight = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 125;
	return isLight ? "#000000" : "#ffffff";
}

function hexToRgb(hex) {
	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
			}
		: null;
}
