import { Module } from "@nestjs/common";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";

@Module({
	imports: [TypeOrmModule.forFeature([UserEntity])],
	providers: [UserResolver, UserService]
})
export class UserModule {}
