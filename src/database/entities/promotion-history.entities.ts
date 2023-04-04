import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { PromotionLine, OrderDetail, Order } from '.';

@Entity({ name: 'promotion_history' })
export class PromotionHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'amount', type: 'double', nullable: true, default: 0.0 })
  amount: number;

  @Column({ name: 'note', type: 'text' })
  note: string;

  @Column({ name: 'quantity', type: 'int', nullable: true, default: 1 })
  quantity: number;

  @Column({ name: 'type', type: 'varchar', length: 100, nullable: true })
  type: string;

  @Column({
    name: 'promotion_line_code',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  promotionLineCode: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', nullable: true })
  public createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
  public updatedAt?: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    select: false,
  })
  public deletedAt?: Date;

  @ManyToOne(() => Order, (order) => order.promotionHistories)
  @JoinColumn({ name: 'order_id', referencedColumnName: 'id' })
  order: Order;

  @ManyToOne(
    () => PromotionLine,
    (promotionLine) => promotionLine.promotionHistory,
  )
  @JoinColumn({ name: 'promotion_line_id', referencedColumnName: 'id' })
  promotionLine: PromotionLine[];

  // @OneToOne(() => OrderDetail, (orderDetail) => orderDetail.buyPromotionHistory)
  // @JoinColumn({ name: 'buy_order_detail_id', referencedColumnName: 'id' })
  // buyOrderDetail: OrderDetail;
}
