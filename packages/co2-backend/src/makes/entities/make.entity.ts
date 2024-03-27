import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  HasMany,
  DataType,
} from 'sequelize-typescript';
import Vehicle from '../../vehicles/entities/vehicle.entity';
import ModelEntity from '../../models/entities/model.entity';

@Table
export class Make extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  readonly id: number;

  @Column({ type: DataType.STRING, unique: true })
  readonly name: string;

  @Column({ type: DataType.STRING })
  readonly originCountry: string;

  @HasMany(() => Vehicle)
  readonly vehicles: Vehicle;

  @HasMany(() => ModelEntity)
  readonly models: ModelEntity[];
}

export default Make;
