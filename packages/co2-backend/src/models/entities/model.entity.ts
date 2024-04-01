import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  BelongsTo,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import Make from '../../makes/entities/make.entity';

@Table({
  tableName: 'Models',
})
export class ModelEntity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  readonly id: number;

  @Column({ type: DataType.STRING, unique: true })
  readonly modelName: string;

  @Column({ type: DataType.INTEGER })
  readonly year: number;

  @Column({ type: DataType.FLOAT })
  readonly mttRatio: number;

  @ForeignKey(() => Make)
  @Column({ type: DataType.INTEGER, field: 'fk_make_id' })
  readonly fkMakeId: number;

  @BelongsTo(() => Make)
  readonly make: Make;
}

export default ModelEntity;
