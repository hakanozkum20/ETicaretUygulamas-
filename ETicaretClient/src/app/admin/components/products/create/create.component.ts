import { Component, OnInit } from '@angular/core';
import { Create_Product } from 'src/app/contracts/create_product';
import {
  AlertifyService,
  MessageType,
  Position,
} from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private alertify: AlertifyService
  ) {}
  ngOnInit(): void {}
  create(
    name: HTMLInputElement,
    stock: HTMLInputElement,
    price: HTMLInputElement
  ) {
    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat(price.value);
    this.productService.create(create_product, () => {
      this.alertify.message('Ürün Başarıyla Eklenmiştir.', {
        dismissOthers: true,
        messageType: MessageType.Success,
        position: Position.TopRight,
      });
    });
  }
}
