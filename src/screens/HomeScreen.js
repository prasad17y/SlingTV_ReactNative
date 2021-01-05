import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ShowsRow from '../components/ShowsRow';
import MenuBar from '../components/MenuBar';
import { getMockData } from '../api_results/data';
import ExpandableRow from '../components/ExpandableRow';

const HomeScreen = () => {

	const [results, setResults] = React.useState(null);
	React.useEffect(() => {
		setResults(getMockData());
	}, []);

	return (
		(results !== null) ? (
			<View style={styles.MainContainerViewStyle} >
				<View style={{marginBottom:10}}>
					<MenuBar menuItems={results.menuItems} ></MenuBar>
				</View>
				<FlatList
					data={results.rows}
					keyExtractor={(item) => item.id}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => {
						return (
							<View>
								{
									item.type==0 ?
									(<ShowsRow title={item.title} shows={results.shows} ></ShowsRow>) :
									(item.type==1 ?
									<ExpandableRow title={item.title} shows={results.shows} categories={results.categories} ></ExpandableRow> : null)
								}
							</View>
						);
					}}
				/>
			</View>
		) : null
	);
};

const styles = StyleSheet.create({
	MainContainerViewStyle: {
		backgroundColor: "#1b1b29",
		flex:1
	}
});
export default HomeScreen;
