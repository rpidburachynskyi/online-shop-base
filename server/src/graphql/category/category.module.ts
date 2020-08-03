import { Module } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryEntity } from "./category.entity";
import { CategoryResolver } from "./category.resolver";

@Module({
	imports: [TypeOrmModule.forFeature([CategoryEntity])],

	providers: [CategoryResolver, CategoryService]
})
export class CategoryModule {}
