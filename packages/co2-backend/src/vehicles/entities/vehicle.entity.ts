import {
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType,
  AutoIncrement,
  ForeignKey,
  BelongsTo, HasMany,
} from 'sequelize-typescript';
import User from '../../users/entities/user.entity';
import Make from '../../makes/entities/make.entity';
import ModelEntity from '../../models/entities/model.entity';
import Order from "../../orders/entities/order.entity";

@Table
export class Vehicle extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  readonly id: number;

  @Column({ type: DataType.INTEGER })
  readonly mileage: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, field: 'fk_user_id' })
  readonly fkUserId: number;

  @BelongsTo(() => User)
  readonly user: User;

  @ForeignKey(() => Make)
  @Column({ type: DataType.INTEGER, field: 'fk_make_id' })
  readonly fkMakeId: number;

  @BelongsTo(() => Make)
  readonly make: Make;

  @ForeignKey(() => ModelEntity)
  @Column({ type: DataType.INTEGER, field: 'fk_model_id' })
  readonly fkModelId: number;

  @BelongsTo(() => ModelEntity)
  readonly model: ModelEntity;

  @HasMany(() => Order)
  readonly orders: Order[];
}

export default Vehicle;
