import { GalleryModel } from './../gallery/gallery.model';
import { AppStore } from './app.store';
import { createSelector } from "@ngrx/store";

export const galleryRootSelector = (state: AppStore) => state.gallery; 

export const uniqueAlbumId = createSelector(
    galleryRootSelector,
    // (galleries: GalleryModel[]) => [...new Set(galleries.map(x => x.albumId))]
    (galleries: GalleryModel[]) => {
        return [...new Set(galleries.map(x => x.albumId))]
    }
)