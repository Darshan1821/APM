import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from './product';

@Component({
    templateUrl: './app/products/product-edit-tags.component.html'
})
export class ProductEditTagsComponent implements OnInit {
    errorMessage: string;
    newTags = '';
    product = { id: 1, category: 'test', tags: ['test']};

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
    }

    addTags(): void {
        let tagArray = this.newTags.split(',');
        this.product.tags = this.product.tags ? this.product.tags.concat(tagArray) : tagArray;
        this.newTags = '';
    }

    removeTag(idx: number): void {
        this.product.tags.splice(idx, 1);
    }
}