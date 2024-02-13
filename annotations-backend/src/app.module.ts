import { Module } from '@nestjs/common';
import { AnnotationsModule } from './modules/annotations/annotations.module';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [AnnotationsModule, CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
