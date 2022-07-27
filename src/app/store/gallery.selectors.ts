import { GalleryModel } from './../gallery/gallery.model';
import { AppStore } from './app.store';
import { createSelector } from "@ngrx/store";

export const galleryRootSelector = (state: AppStore) => state.gallery; 

export const uniqueAlbumId = createSelector(
    galleryRootSelector,
    // (galleries: GalleryModel[]) => [...new Set(galleries.map(x => x.albumId))]
    (gallery: GalleryModel[]) => {
        return [...new Set(gallery.map(x => x.albumId))]
    }
)

export const getAlbumById = (id: number) => createSelector(
    galleryRootSelector,
    (gallery: GalleryModel[]) => {
        if (id === -1) return gallery;
        return gallery.filter(x => x.id == id);
    }
)