const SET_ARGU = 'SET_ARGU';

//分钱形成各个红包
function setBags(people, money) {
	//转为数字
	people = +people;
	money = +money;
	var bags = [];
	var currsum = 0, index = 0, lastMax = 0;
	//一人0.01
	if (money / people == 0.01) {
		for (let i = 0; i < people; i++) {
			let bag = {};
			bag.bag = (money / people).toFixed(2);
			currsum += +bag.bag;
			bag.rest = (money - currsum).toFixed(2);
			bags.push(bag);
		}
	} else {
		for (let i = 0; i < people; i++) {
			let bag = {};
			//最后一个人
			if (i === people - 1) {
				bag.bag = (money - currsum).toFixed(2);
				bag.rest = 0;
			//不是最后一个人
			} else {
				var ave = ((money - currsum) / (people - i));
				bag.bag = ((Math.random() + 0.01) * (ave * 2)).toFixed(2);
				if (bag.bag < 0.01) {
					bag.bag = 0.01
				}
				currsum += +bag.bag;
				bag.rest = (money - currsum).toFixed(2);
			}
			//找到手气最佳
			if (i === 0) {
				index = 0;
				lastMax = bag.bag;
			}else if (bag.bag > lastMax)
			{
				index = i;
				lastMax = bag.bag;
			}

			bags.push(bag);
		}
	}
	//最佳手气
	bags[index].isMax = true;

	return bags;
}

function reducer(state, action) {

	if (!state) {
		return {
			people: '',
			money: '',
			bags: [{bag: 0, rest: 0}]
		}
	}
	switch (action.type) {
		case SET_ARGU:
			var bags = setBags(action.people, action.money);
			//state多了已经分配好红包的bags属性
			return {
				...state,
				people: action.people,
				money: action.money,
				bags: bags
			}
		default:
			return state;
	}
}

export default reducer;