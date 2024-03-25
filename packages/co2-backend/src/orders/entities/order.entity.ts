import { Column, Model, Table, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import User from '../../users/entities/user.entity';
import Tree from '../../trees/entities/tree.entity';

@Table
export class Order extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @ForeignKey(() => Tree)
    @Column
    treeId: number;

    @Column
    quantity: number;

    @Column
    totalPrice: number;
}

export default Order;
