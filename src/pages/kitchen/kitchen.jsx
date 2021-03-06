import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import HeaderKitchen from '../../components/headerKitchen/headerKitchen';
import Footer from '../../components/footer/footer';
// import KitchenPreview from '../../components/kitchenPreview/kitchenPreview';
import KitchenPreviewContainer from '../../components/kitchenPreview/kitchenPreview.container';
// import KitchenCollection from '../kitchenCollection/kitchenCollection';
import kitchenCollectionContainer from '../kitchenCollection/kitchenCollection.container';
// import WithSpinner from '../../components/withSpinner/withSpinner';
import './kitchen.scss';

// import { updateKitchenCollections } from '../../redux/kitchen/kitchen.actions';
// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

// import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/kitchen/kitchen.selectors';
// import { fetchCollectionsStartAsync } from '../../redux/kitchen/kitchen.actions';
import { fetchCollectionsStart } from '../../redux/kitchen/kitchen.actions';


// const KitchenPreviewSpinner = WithSpinner(KitchenPreview);
// const KitchenCollectionSpinner = WithSpinner(KitchenCollection);


// const Kitchen = ( { match, updateKitchenCollections } ) => {
// const Kitchen = ( { match, fetchStartAsync, isFetching, isLoaded } ) => {
// const Kitchen = ( { match, fetchStartAsync } ) => {
const Kitchen = ( { match, fetchCollectionsStart } ) => {
    // const [isLoading, setIsLoading] = useState(true);

    // let unsubscribeFormSnapshot = useRef(null);

    // useEffect(() => {
    //     const collectionRef = firestore.collection('collections');

    //     // unsubscribeFormSnapshot.current = collectionRef.onSnapshot(async snapshot => {
    //     collectionRef.get().then(async snapshot => {
    //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //         updateKitchenCollections(collectionsMap);

    //         // setIsLoading(false);
    //     });

    //     // return () => unsubscribeFormSnapshot;
    // }, [updateKitchenCollections, setIsLoading]);

    
    useEffect(() => {
        // fetchStartAsync();
        fetchCollectionsStart();
        
    // }, [fetchStartAsync]);
    }, [fetchCollectionsStart]);


    return (
        <div className="pure-container">
            <HeaderKitchen />

            {/* <Route exact path={`${match.path}`} component={KitchenPreview} /> */}
            <Route 
                exact 
                path={`${match.path}`} 
                // render={(props) => <KitchenPreviewSpinner isLoading={isFetching} {...props} />} 
                component={KitchenPreviewContainer}
            />

            {/* <Route path={`${match.path}/:kitchenCollectionId`} component={KitchenCollection} /> */}
            <Route 
                path={`${match.path}/:kitchenCollectionId`} 
                // render={(props) => <KitchenCollectionSpinner isLoading={!isLoaded} {...props} />} 
                component={kitchenCollectionContainer}
            />

            <Footer />
        </div>
    );
};

// const mapStateToProps = createStructuredSelector({
//     isFetching: selectIsCollectionFetching,
//     isLoaded: selectIsCollectionLoaded
// });

const mapDispatchToProps = dispatch => ({
    // updateKitchenCollections: (collectionsMap) => dispatch(updateKitchenCollections(collectionsMap))
    // fetchStartAsync: () => dispatch(fetchCollectionsStartAsync())
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});


// export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);
export default connect(null, mapDispatchToProps)(Kitchen);