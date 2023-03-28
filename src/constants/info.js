import { v4 } from 'uuid';

const SolvingInfo = [
	{
		id: v4(),
		src: '/public/images/icon-square.svg'
	},
	{
		id: v4(),
		src: '/public/images/icon-brackets.svg'
	},
	{
		id: v4(),
		src: '/public/images/icon-check-list.svg'
	}
];
const PropertiesInfo = [
	{
		id: v4(),
		title: 'Use sensitive data without sacrificing privacy',
		text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.'
	},
	{
		id: v4(),
		title: 'Standardized dev environments',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	},
	{
		id: v4(),
		title: 'Find a plan thats right for you',
		text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.'
	}
];
const PropertiesList = [
	{
		id: v4(),
		text: 'Performance reviews'
	},
	{
		id: v4(),
		text: 'Objectives and goal setting'
	},
	{
		id: v4(),
		text: 'Manager check-ins'
	}
];
const FeeInfo = [
	{
		id: v4(),
		type: 'Starter',
		price: '49',
		includes: 'Features include:'
	},
	{
		id: v4(),
		type: 'Business',
		price: '79',
		includes: 'Everything in Starter, plus:'
	},
	{
		id: v4(),
		type: 'Enterprise',
		price: '129',
		includes: 'Everything in Business, plus:'
	}
];
const PriceList = [
	{
		listItems: [
			{
				id: v4(),
				text: 'Unlimited placeholder texts'
			}
		]
	},
	{
		id: v4(),
		li: 'Consectetur adipiscing elit'
	},
	{
		id: v4(),
		li: 'Excepteur sint occaecat cupidatat'
	}
];
export { SolvingInfo, PropertiesInfo, PropertiesList, FeeInfo };
