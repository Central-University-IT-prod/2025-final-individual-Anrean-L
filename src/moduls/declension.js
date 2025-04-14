const constructDeclension = (form1, form2, form3) => n => {
	if (n % 100 < 20 && n % 100 > 10) return form1;
	if (n % 10 <= 4 && n % 10 > 1) return form2;
	if (n % 10 == 1) return form3;
	return form1;
};

const declension = {
	exersize: constructDeclension('упражнений', 'упражнения', 'упражнение'),
	minutes: constructDeclension('минут', 'минуты', 'минута'),
	coins: constructDeclension('монет', 'монеты', 'монета'),
};

export default declension;
