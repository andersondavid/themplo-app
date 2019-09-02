import { createStackNavigator, createAppContainer } from 'react-navigation';
import PageHome from './pages/PageHome';
import PageEdit from './pages/PageEdit'

const AppNavigator = createStackNavigator({
	PageHome: {
		screen: PageHome,
		navigationOptions: {
			header: null,
		}
	},

	PageEdit: {
		screen: PageEdit,
		navigationOptions: {
			header: null,
		}
	},
},
{
	initialRouteName: 'PageHome'
});


export default createAppContainer(AppNavigator);
