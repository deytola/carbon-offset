import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  HasMany,
  DataType,
} from 'sequelize-typescript';
import Order from '../../orders/entities/order.entity';

@Table
export class Tree extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  readonly id: number;

  @Column({ type: DataType.STRING })
  readonly species: string;

  @Column({ type: DataType.INTEGER })
  readonly age: number;

  @Column({ type: DataType.INTEGER })
  readonly unitPrice: number;

  @HasMany(() => Order)
  readonly orders: Order[];
}

export default Tree;
