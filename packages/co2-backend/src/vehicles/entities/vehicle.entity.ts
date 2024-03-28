import {
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import User from '../../users/entities/user.entity';
import Make from '../../makes/entities/make.entity';

@Table
export class Vehicle extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  readonly id: number;

  @Column({ type: DataType.INTEGER })
  readonly year: number;

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
}

export default Vehicle;
