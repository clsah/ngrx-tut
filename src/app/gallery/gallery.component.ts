import { invokeGalleryAPI, retrievedGallery } from './../store/gallery.actions';
import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { GalleryModel } from "./gallery.model";
import { GalleryService } from "./gallery.service";
import { getAlbumById, uniqueAlbumId } from '../store/gallery.selectors';

@Component({
    templateUrl: './gallery.component.html',
    selector: 'gallery',
})

export class GalleryComponent implements OnInit {
    selectedAlbumId = -1;
    albumIds$ = this.store.pipe(select(uniqueAlbumId));
    allGallery$ =  this.store.pipe(select(getAlbumById(this.selectedAlbumId)))
    constructor(
        private store: Store<{ gallery: GalleryModel[] }>,
        private galleryService: GalleryService
    ) { }
    ngOnInit(): void {
        // this.galleryService.loadGallery().subscribe((gallery) => {
        //     // this part where we need to get or store our app state 
        //     //here ngrx come to picture
        //     console.log(gallery)
        //     this.store.dispatch(retrievedGallery({allGallery: gallery as GalleryModel[]}))
        // })

        this.store.dispatch(invokeGalleryAPI());
    }

    albumChange(event:number) {
        this.allGallery$ =  this.store.pipe(select(getAlbumById(event)))
    }
}