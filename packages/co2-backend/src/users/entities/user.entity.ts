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
import Vehicle from '../../vehicles/entities/vehicle.entity';
import { UserRoles } from '../constants';

@Table
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  readonly id: number;

  @Column({ type: DataType.STRING })
  readonly firstName: string;

  @Column({ type: DataType.STRING })
  lastName: string;

  @Column({ type: DataType.STRING, unique: true })
  email: string;

  @Column({ type: DataType.STRING })
  password: string;

  @HasMany(() => Order)
  orders: Order[];

  @HasMany(() => Vehicle)
  readonly vehicles: Vehicle[];

  @Column({
    type: DataType.ENUM,
    values: Object.values(UserRoles),
    allowNull: false,
    defaultValue: UserRoles.regular,
  })
  readonly userRole: UserRoles;
}

export default User;
