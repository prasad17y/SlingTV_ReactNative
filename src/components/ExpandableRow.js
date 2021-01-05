import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import CategoryTile from './CategoryTile';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import ShowsWithPreviewRow from './ShowsWithPreviewRow';

const ExpandableRow = ({ title, shows, categories }) => {
    const [expand, setExpand] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(-1);
    const [selectedCategoryTitle, setSelectedCategoryTitle] = useState('');
    const [selectedCategoryShows, setSelectedCategoryShows] = useState([]);
    const dataProvider = useRef(new DataProvider((r1, r2) => {
        return r1.id !== r2.id;
    }));
    const [dataProviderStateVariable, setDataProviderStateVariable] = useState(dataProvider.current.cloneWithRows(categories));
    //to update data inside dataProvider => dataProvider.current.cloneWithRows(newData);
    let { width } = Dimensions.get("window");
    const layoutProvider = new LayoutProvider(
        index => {
            return 0;
        },
        (type, dim) => {
            switch (type) {
                case 0:
                    dim.width = 281;
                    dim.height = 400;
                    break;
                default:
                    dim.width = 0;
                    dim.height = 0;
            }
        }
    );

    function rowRenderer(type, data) {
        switch (type) {
            case 0:
                return (
                    <CategoryTile categoryDetails={data} selectedCategory={selectedCategory} callback={callbackFunction}></CategoryTile>
                );
            default:
                return null;
        }
    }

    function callbackFunction(id) {
        if(selectedCategory == -1){
            setSelectedCategory(id);
            showsFilteredByCategory(id);
            getTitleOfCategory(id);
            setExpand(true);  
        }else {
            if(selectedCategory == id){
                setExpand(false);
                setSelectedCategory(-1);
            }else{
                setExpand(false);
                setSelectedCategory(id);
                showsFilteredByCategory(id);
                getTitleOfCategory(id);
                setExpand(true);
            }
        }
    }
    
    function showsFilteredByCategory(categoryId){
        const showsList = shows.filter((showDetails)=>{
            return showDetails.category == categoryId ;
        });
        setSelectedCategoryShows(showsList);
    }

    function getTitleOfCategory(id){
        for(i=0; i<categories.length; i++){
            if(categories[i].id == id){
                setSelectedCategoryTitle(categories[i].title);
            }
        }
    }

    return (
        <>
            <View style={styles.ParentContainer}>
                <Text style={styles.rowTitle}>{title}</Text>
                <RecyclerListView
                    layoutProvider={layoutProvider}
                    dataProvider={dataProviderStateVariable}
                    rowRenderer={rowRenderer}
                    isHorizontal={true}
                    scrollViewProps={{ showsHorizontalScrollIndicator: false }}
                />
            </View>
            {expand ? 
            (<ShowsWithPreviewRow shows={selectedCategoryShows} title={selectedCategoryTitle} ></ShowsWithPreviewRow>)
            : null}
        </>
    );
};

const styles = StyleSheet.create({
    ParentContainer: {
        flex: 1,
        marginHorizontal: 30,
        marginVertical: 0,
        height: 220,
        width: 900,
    },
    rowTitle: {
        fontSize: 20,
        marginBottom: 20,
        color: "white"
    }
});
export default ExpandableRow;