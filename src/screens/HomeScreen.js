import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Row from '../components/Row';
import MenuBar from '../components/MenuBar';
import { getMockData } from '../api_results/data';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

const HomeScreen = () => {
	
	const [results, setResults] = React.useState(null);
	let dataProviderVariable;
	React.useEffect(() => {
		setResults(getMockData());
	}, []);
	
	const dataProvider = React.useRef(new DataProvider((r1,r2)=>{
        return r1.id !== r2.id;
	}));
	
	if(results != null){
		dataProviderVariable = dataProvider.current.cloneWithRows(results.rows);
	}
	
	const layoutProvider = new LayoutProvider(
        index => {
            return 0;
        },
        (type,dim) => {
            switch(type){
                case 0 :
                    dim.width = 900;
                    dim.height = 300;
                    break;
                default :
                    dim.width=0;
                    dim.height=0;
            }
        }
    );

	function rowRenderer(type, data) {
        switch (type) {
            case 0:
                return (
                    <Row title={data.title} shows={results.shows} ></Row>
                );
            default:
                return null;
        }
    }
	
	return (
		(results !== null)?(
			<ScrollView style={styles.scrollViewStyle} showsVerticalScrollIndicator={false} >
				<MenuBar menuItems={results.menuItems} ></MenuBar>
				<View style={styles.rowsListContainer}>
					<RecyclerListView
						layoutProvider={layoutProvider}
						dataProvider={dataProviderVariable}
						rowRenderer={rowRenderer}
						scrollViewProps={{showsVerticalScrollIndicator:false}}
					/>
        		</View>
			</ScrollView>
		) : null
	);
};

const styles = StyleSheet.create({
	scrollViewStyle : {
		backgroundColor:"#1b1b29",
	},
	rowsListContainer : {
		flex:1,
        marginHorizontal: 30,
        marginVertical: 30,
        height:1000,
        width:900,
	}
});
export default HomeScreen;
