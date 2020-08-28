import { Field, InputType } from "@nestjs/graphql";

@InputType("CategoryFieldInput")
export class CategoryFieldInput {
	@Field()
	name: string;

	@Field()
	type: string;

	@Field()
	defaultValue: string;
}