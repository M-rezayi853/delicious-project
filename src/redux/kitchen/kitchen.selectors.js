import { createSelector } from 'reselect';


const selectKitchen = state => state.kitchen;

export const selectKitchenCollections = createSelector(
    [selectKitchen],
    kitchen => kitchen.collections
);

export const selectKitchenCollectionsForPreview = createSelector(
    [selectKitchenCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectKitchenCollectionsUrl = collectionUrlParam => createSelector(
    [selectKitchenCollections],
    collections => collections ? collections[collectionUrlParam] : null
);

export const selectIsCollectionFetching = createSelector(
    [selectKitchen],
    kitchen => kitchen.isFetching 
);

export const selectIsCollectionLoaded = createSelector(
    [selectKitchen],
    kitchen => !!kitchen.collections
);