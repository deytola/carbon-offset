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

@Table
export class Vehicle extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  readonly id: number;

  @Column({ type: DataType.INTEGER })
  readonly year: number;

  @Column({ type: DataType.STRING })
  readonly make: string;

  @Column({ type: DataType.STRING })
  readonly model: string;

  @Column({ type: DataType.INTEGER })
  readonly mileage: number;

  @Column({ type: DataType.INTEGER })
  readonly mttRatio: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, field: 'fk_user_id' })
  readonly fkUserId: number;

  @BelongsTo(() => User)
  readonly user: User;
}

export default Vehicle;
