import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaService } from 'src/Database/prisma.service';

@Module({
  controllers: [BooksController],
  providers: [BooksService, PrismaService],
})
export class BooksModule {}
