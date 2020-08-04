import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ProductFieldEntity } from "./product-field/product-field.entity";

@Entity({ name: "products" })
export class ProductEntity {
	@PrimaryGeneratedColumn({ type: "int" })
	id: number;

	@Column({ nullable: false, type: "text" })
	name: string;

	@Column({ name: "category_id", type: "int" })
	categoryId: number;

	@Column({
		name: "fields",
		default: JSON.stringify([]),
		type: "json"
	})
	fields: ProductFieldEntity[];
}
