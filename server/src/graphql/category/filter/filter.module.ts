import { Module } from "@nestjs/common";
import { FilterResolver } from "./filter.resolver";
import { FilterService } from "./filter.service";
import { FilterFieldModule } from "./filter-group/filter-field/filter-field.module";
import { FilterType } from "./filter.type";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FilterEntity } from "./filter.entity";
import { CategoryEntity } from "../category.entity";
import { FilterGroupModule } from "./filter-group/filter-group.module";

@Module({
	imports: [
		TypeOrmModule.forFeature([FilterEntity, CategoryEntity]),
		FilterFieldModule,
		FilterGroupModule
	],
	providers: [FilterResolver, FilterService, FilterType]
})
export class FilterModule {}
