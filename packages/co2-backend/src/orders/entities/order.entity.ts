import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import User from '../../users/entities/user.entity';
import Tree from '../../trees/entities/tree.entity';

@Table
export class Order extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  readonly id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, field: 'fk_user_id' })
  readonly fkUserId: number;

  @BelongsTo(() => User)
  readonly user: User;

  @ForeignKey(() => Tree)
  @Column({ type: DataType.INTEGER, field: 'fk_tree_id' })
  readonly fkTreeId: number;

  @BelongsTo(() => Tree)
  readonly tree: Tree;

  @Column({ type: DataType.INTEGER })
  readonly quantity: number;

  @Column({ type: DataType.INTEGER })
  readonly totalPrice: number;
}

export default Order;
