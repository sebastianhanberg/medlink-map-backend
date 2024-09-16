import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CountiesModule } from './counties/counties.module';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { County } from './counties/county.entity';
import { KommunerModule } from './kommuner/kommuner.module';
import { Kommun } from './kommuner/kommun.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
        const dbConfig: TypeOrmModuleOptions = {
          type: 'mysql',
          host: configService.get<string>('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_DATABASE'),
          entities: [__dirname + '/**/*.entity{.ts,.js}', County, Kommun],
          synchronize: true, // Be careful with this in production
        };

        console.log('Database Configuration:');
        console.log(`DB_HOST: ${dbConfig.host}`);
        console.log(`DB_PORT: ${dbConfig.port}`);
        console.log(`DB_USERNAME: ${dbConfig.username}`);
        console.log(`DB_PASSWORD: ${dbConfig.password}`);
        console.log(`DB_DATABASE: ${dbConfig.database}`);

        return dbConfig;
      },
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    CountiesModule,
    KommunerModule,
  ],
})
export class AppModule {}
